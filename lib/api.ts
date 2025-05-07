import { produtoSchema, listaSchema } from "./schema";

const BASE = process.env.API_URL!;

export async function getProduto(slug: string) {
  const r = await fetch(`${BASE}/produtos/${slug}`, { next: { tags: [`produto:${slug}`] } });
  if (!r.ok) return null;
  return produtoSchema.parse(await r.json());
}

export async function getLista() {
  const r = await fetch(`${BASE}/produtos`, { next: { revalidate: 300 } });
  return listaSchema.parse(await r.json());
}
// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict
