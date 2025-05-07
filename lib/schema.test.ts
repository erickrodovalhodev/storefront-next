import { describe, it, expect } from "vitest";
import { produtoSchema } from "./schema";

describe("produtoSchema", () => {
  it("rejects a product without price", () => {
    const r = produtoSchema.safeParse({ id: "1", slug: "a", nome: "A", image: "x", variants: [] });
    expect(r.success).toBe(false);
  });

  it("accepts a complete product", () => {
    const r = produtoSchema.safeParse({ id: "1", slug: "a", nome: "A", price: 9, image: "x", variants: [] });
    expect(r.success).toBe(true);
  });
});
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
