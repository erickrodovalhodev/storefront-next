import { produtoSchema, listaSchema } from "./schema";
import { produtosMock } from "./mock";

// Sem API_URL o catálogo vem de lib/mock.ts; o zod valida os dois caminhos igual.
const BASE = process.env.API_URL;

export async function getProduto(slug: string) {
  if (!BASE) {
    const p = produtosMock.find((x) => x.slug === slug);
    return p ? produtoSchema.parse(p) : null;
  }
  const r = await fetch(`${BASE}/produtos/${slug}`, { next: { tags: [`produto:${slug}`] } });
  if (!r.ok) return null;
  return produtoSchema.parse(await r.json());
}

export async function getLista() {
  if (!BASE) return listaSchema.parse(produtosMock);
  const r = await fetch(`${BASE}/produtos`, { next: { revalidate: 300 } });
  return listaSchema.parse(await r.json());
}
