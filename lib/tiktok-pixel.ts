/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * TikTok Pixel Utility
 * Helper functions untuk tracking events di portfolio devdivo.my.id
 */

declare global {
  interface Window {
    ttq: any;
  }
}

// Helper - fire event langsung ke window.ttq (queue-based, selalu available)
const fireEvent = (eventName: string, params: object) => {
  try {
    if (typeof window === 'undefined') return;
    // window.ttq selalu ada karena pixel script mendefinisikannya sebagai array queue
    window.ttq?.track(eventName, params);
    if (process.env.NODE_ENV === 'development') {
      console.log('[TikTok Pixel]', eventName, params);
    }
  } catch (err) {
    console.warn('[TikTok Pixel] Error firing event:', eventName, err);
  }
};

// ─── Currency & Content Defaults (Portfolio context) ─────────────────────────
const CURRENCY = 'IDR';

// ─── ViewContent ─────────────────────────────────────────────────────────────
// Dipanggil ketika user melihat section/halaman penting
export const trackViewContent = (contentName: string, contentId: string, value = 0) => {
  fireEvent('ViewContent', {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName,
      },
    ],
    value,
    currency: CURRENCY,
  });
};

// ─── ClickButton ─────────────────────────────────────────────────────────────
// Dipanggil ketika user klik CTA button
export const trackClickButton = (contentName: string, contentId: string, value = 0) => {
  fireEvent('ClickButton', {
    contents: [
      {
        content_id: contentId,
        content_type: 'product',
        content_name: contentName,
      },
    ],
    value,
    currency: CURRENCY,
  });
};

// ─── Contact ─────────────────────────────────────────────────────────────────
// Dipanggil ketika user submit form kontak atau klik WhatsApp
export const trackContact = (contentName = 'Contact Form', value = 0) => {
  fireEvent('Contact', {
    contents: [
      {
        content_id: 'contact',
        content_type: 'product',
        content_name: contentName,
      },
    ],
    value,
    currency: CURRENCY,
  });
};

// ─── Lead ────────────────────────────────────────────────────────────────────
// Dipanggil ketika user mulai checkout / isi form order
export const trackLead = (packageName: string, price: number) => {
  fireEvent('Lead', {
    contents: [
      {
        content_id: 'pricing',
        content_type: 'product',
        content_name: packageName,
      },
    ],
    value: price,
    currency: CURRENCY,
  });
};

// ─── InitiateCheckout ─────────────────────────────────────────────────────────
// Dipanggil ketika user klik "Chat via WhatsApp" dari pricing card
export const trackInitiateCheckout = (packageName: string, price: number) => {
  fireEvent('InitiateCheckout', {
    contents: [
      {
        content_id: `package-checkout`,
        content_type: 'product',
        content_name: packageName,
      },
    ],
    value: price,
    currency: CURRENCY,
  });
};

// ─── AddToCart ────────────────────────────────────────────────────────────────
// Dipanggil ketika user memilih pricing card (setara "add to cart")
export const trackAddToCart = (packageName: string, price: number) => {
  fireEvent('AddToCart', {
    contents: [
      {
        content_id: `package-select`,
        content_type: 'product',
        content_name: packageName,
      },
    ],
    value: price,
    currency: CURRENCY,
  });
};

// ─── CompleteRegistration ─────────────────────────────────────────────────────
// Dipanggil ketika user submit order/checkout berhasil redirect ke payment
export const trackCompleteRegistration = (packageName: string, price: number) => {
  fireEvent('CompleteRegistration', {
    contents: [
      {
        content_id: 'checkout',
        content_type: 'product',
        content_name: packageName,
      },
    ],
    value: price,
    currency: CURRENCY,
  });
};

// ─── AddToWishlist ────────────────────────────────────────────────────────────
// Dipanggil ketika user memilih/klik pricing card
export const trackAddToWishlist = (packageName: string, price: number) => {
  fireEvent('AddToWishlist', {
    contents: [
      {
        content_id: 'package-select',
        content_type: 'product',
        content_name: packageName,
      },
    ],
    value: price,
    currency: CURRENCY,
  });
};

// ─── Search ──────────────────────────────────────────────────────────────────
// Dipanggil jika ada fitur search (opsional, untuk future use)
export const trackSearch = (searchString: string) => {
  fireEvent('Search', {
    contents: [
      {
        content_id: 'search',
        content_type: 'product',
        content_name: searchString,
      },
    ],
    value: 0,
    currency: CURRENCY,
    search_string: searchString,
  });
};
