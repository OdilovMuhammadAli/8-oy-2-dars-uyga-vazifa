export default async function SSGPage() {
  const req = await fetch("https://jsonbek.uz/api/todos?style=comedy", {
    cache: "force-cache",
  });

  const data = await req.json();

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">SSG</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
//   SSG ga men loading ishlatmadim agar cache-ni force-cache qilsa malumot tez kelar ekan oshaning uchun loading kerak emas ekan
