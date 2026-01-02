const API_URL = process.env.EXPO_PUBLIC_API_URL;
export default async function getSingleItem (id: number) {
 const res = await fetch(`${API_URL}products/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message ?? "Falha na busca de login");
  }
  return data;
}