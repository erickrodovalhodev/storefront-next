import { describe, it, expect } from "vitest";
import { moeda } from "./format";

describe("moeda", () => {
  it("formats BRL", () => expect(moeda(1299.9)).toContain("1.299,90"));
  it("keeps cents", () => expect(moeda(9.5)).toContain(",50"));
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

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict
