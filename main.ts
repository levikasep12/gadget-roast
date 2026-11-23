// One-Line Roast: The Gadget You Use Every Day — make.fun entry for u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Writes the entry's single roast line to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone battery dies at 4pm sharp every day, like it has a union contract and a strict quitting time.";

// The gate allows 1 to 200 characters: refuse to emit a line that would fail it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry roast is ${LINE.length} characters, must be 1-200`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
