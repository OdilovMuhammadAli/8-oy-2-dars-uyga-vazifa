export default async function ISRPage() {
  const res = await fetch("https://jsonbek.uz/api/todos?style=comedy", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Fetch error");
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">ISR[60s]</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
//    next: { revalidate: 60 } bu ISR ning xususyati va har 60 sekundan keyn yangi fetch yaratib beradi shuni dasdidan 60 sekundan keyn faydanaluvchi yangi malumotni koradi
//  {data.map((item) => ( <p key={item.id}>{item.title}</p>  titlini korish uchun va p yaratvolyapan
// if (!res.ok) {
//   throw new Error("Fetch error");
// }-bu esa xatolik yuz bersa  avtamik tarzda  error.jsx chaqiradi
