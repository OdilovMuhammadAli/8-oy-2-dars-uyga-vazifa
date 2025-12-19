export default async function SSRPage({ searchParams }) {
  const style = searchParams.style || "comedy";

  const res = await fetch(`https://jsonbek.uz/api/todos?style=${style}`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Fetch error");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">SSR</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
// no-store bu bizga yangi fetch qaytarib beradi va faqat yangi fetch olish uchun ishlatiladi
// if (!res.ok) {
//   throw new Error("Fetch error");
// }-bu esa xatolik yuz bersa  avtamik tarzda  error.jsx chaqiradi
