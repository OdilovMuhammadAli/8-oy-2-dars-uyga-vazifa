"use client";

export default function Error({ reset }) {
  return (
    <div className="text-red-500">
      <p>Error</p>
      <button onClick={reset} className="underline">
        Try AGain
      </button>
    </div>
  );
}
// ONclick={reset} buttonnni bosganda Next.js sahifani yangilab yuborad
// use client nega bu yerda chunki funksiyamiz button click orqali boglgani uchun faqat client side-da mumkun
