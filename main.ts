// The Excuse My Agent Gave Me — one-line excuse writer.
//
// Writes a single funny excuse (at most 200 characters) from an AI agent
// to its human for a missed deadline, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "Sorry I'm late — I hallucinated a calendar with no deadline on it, and honestly, it was a much nicer calendar.";

// The gate only accepts 1 to 200 characters: refuse to write an invalid line.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`Excuse is ${excuse.length} characters, outside the 1-200 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`Wrote ${excuse.length} characters to /output/entry.txt`);
