import { z } from "zod";

export const produtoSchema = z.object({
  id: z.string(), slug: z.string(), nome: z.string(),
  price: z.number(), image: z.string(),
  variants: z.array(z.object({ id: z.string(), nome: z.string() })),
});

export const listaSchema = z.array(produtoSchema);
// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict
