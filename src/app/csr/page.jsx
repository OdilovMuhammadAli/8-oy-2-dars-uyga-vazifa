"use client";

import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import { Skeleton } from "@/components/ui/skeleton";

export default function CSRPage() {
  const [style, setStyle] = useState("comedy");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonbek.uz/api/todos?style=${style}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [style]);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">CSR</h1>
      <Filter value={style} onChange={setStyle} />

      {loading && <Skeleton className="h-32 w-full" />}

      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
//   {loading && <Skeleton className="h-32 w-full" />} loading true bolsa skeleton korsatiladi
//   const [style, setStyle] = useState("comedy");
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false); state lar yaratib olingan bu yerda
//  onChange={setStyle} - style state ni yangilaydi
