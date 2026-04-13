import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { packageId, price, firstName, lastName, email, phone, paymentMethod } = body;

    const merchantCode = process.env.DUITKU_MERCHANT_CODE;
    const apiKey = process.env.DUITKU_API_KEY;

    if (!merchantCode || !apiKey) {
      console.error("Duitku credentials are not configured in .env");
      return NextResponse.json(
        { error: 'Payment gateway is not configured' },
        { status: 500 }
      );
    }

    const paymentAmount = parseInt(price, 10);
    const merchantOrderId = `ORDER-${Date.now()}`;

    // Official v2 Signature: MD5(merchantCode + merchantOrderId + paymentAmount + apiKey)
    const signatureRaw = merchantCode + merchantOrderId + paymentAmount + apiKey;
    const signature = crypto.createHash('md5').update(signatureRaw).digest('hex');

    // Set callback & return URLs
    // Note: Duitku requires public URLs for callbacks. 
    // On localhost, it won't actually hit the callback route unless using Ngrok.
    const origin = req.headers.get('origin') || 'http://localhost:3000';
    const callbackUrl = `${origin}/api/checkout/callback`;
    const returnUrl = `${origin}/?status=success&orderId=${merchantOrderId}`;

    const customerInfo = JSON.stringify({ 
      name: `${firstName} ${lastName}`, 
      email: email, 
      phone: phone, 
      packageId: packageId 
    });

    const requestData = {
      merchantCode,
      paymentAmount,
      merchantOrderId,
      productDetails: `Investment Pack: ${packageId}`,
      email: email,
      paymentMethod: paymentMethod || "Q1",
      customerVaName: `${firstName} ${lastName}`,
      phoneNumber: phone,
      additionalParam: customerInfo, // Ini akan dikembalikan Duitku saat callback success
      itemDetails: [{ name: `Package ${packageId}`, price: paymentAmount, quantity: 1 }],
      callbackUrl,
      returnUrl,
      signature,
      expiryPeriod: 1440 // 24 Hours
    };

    // Official Sandbox URL
    const duitkuUrl = 'https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry';

    const duitkuResponse = await fetch(duitkuUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });

    const data = await duitkuResponse.json();

    if (duitkuResponse.ok && data.statusCode === '00') {
      return NextResponse.json({ paymentUrl: data.paymentUrl });
    } else {
      console.error("Duitku Error Response:", data);
      return NextResponse.json(
        { error: data.statusMessage || 'Failed to generate payment link' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
