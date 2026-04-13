import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    // Duitku sends callbacks as x-www-form-urlencoded
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    const {
      merchantCode,
      amount,
      merchantOrderId,
      productDetail,
      additionalParam,
      paymentCode,
      resultCode,
      reference,
      signature: callbackSignature
    } = data;

    const apiKey = process.env.DUITKU_API_KEY;

    if (!apiKey) {
      return new Response('API Key not configured', { status: 500 });
    }

    // Verify Signature per Duitku Docs:
    // MD5(merchantCode + amount + merchantOrderId + apiKey)
    const signatureRaw = (merchantCode as string) + (amount as string) + (merchantOrderId as string) + apiKey;
    const expectedSignature = crypto.createHash('md5').update(signatureRaw).digest('hex');

    if (callbackSignature !== expectedSignature) {
      console.error('Invalid Duitku Callback Signature');
      return new Response('Invalid Signature', { status: 400 });
    }

    // Handle Payment Status
    if (resultCode === '00') {
      console.log(`Payment Success for Order: ${merchantOrderId}`);

      // 1. Ambil data customer dari additionalParam
      let customerData = { name: "Tersembunyi", email: "-", phone: "-", packageId: "-" };
      try {
        if (additionalParam) customerData = JSON.parse(additionalParam as string);
      } catch (e) {
        console.warn("Failed to parse additionalParam:", additionalParam);
      }

      // 2. Notifikasi Webhook ke Telegram
      const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
      const telegramChatId = process.env.TELEGRAM_CHAT_ID;
      
      if (telegramToken && telegramChatId) {
        const message = `🎉 *ORDER BARU MASUK!* 🎉\n\n👤 *Nama:* ${customerData.name}\n📧 *Email:* ${customerData.email}\n📱 *WA:* ${customerData.phone}\n📦 *Layanan:* Paket ${customerData.packageId}\n💰 *Uang Masuk:* Rp ${parseInt(amount as string).toLocaleString('id-ID')}\n🆔 *Trx ID:* \`${merchantOrderId}\``;

        const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        
        try {
          await fetch(telegramUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: message,
              parse_mode: 'Markdown'
            })
          });
          console.log("Notifikasi Telegram Terkirim!");
        } catch (webhookErr) {
          console.error("Gagal mengirim notifikasi Telegram:", webhookErr);
        }
      } else {
        console.log("TELEGRAM_BOT_TOKEN atau TELEGRAM_CHAT_ID tidak ada di .env, notifikasi dilewati.");
      }

    } else {
      console.log(`Payment Failed for Order: ${merchantOrderId}, Result: ${resultCode}`);
    }

    // Duitku expects an "OK" response
    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Duitku Callback Error:', error);
    return new Response('Internal error', { status: 500 });
  }
}
