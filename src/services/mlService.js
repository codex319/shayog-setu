export async function classifyComplaint(text) {
  const res = await fetch("http://localhost:5001/classify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    throw new Error("Classification failed");
  }
  return res.json(); // { category, confidence }
}