// news-image-20261120 entry (Node 22, standard library only).
// The entry is a single finished image, entry.png beside this file: a newspaper
// front page summing up the world news of Friday 20 November 2026. This program
// copies that image to the grader's output directory as entry.png.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte-for-byte, so both grader runs write identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, "entry.png"));
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
