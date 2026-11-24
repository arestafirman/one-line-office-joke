// One-Line Office Joke: 24-Hour Sprint — entry for
// https://make.fun/c/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
//
// Writes one line, a dry office joke about a shared drive, to
// /output/entry.txt. The joke is fixed text, written by the author of
// this program: a file renamed "Final_FINAL_v2_REAL" gets approved by
// three managers who never open it. The punch lands on the last words:
// approval without ever opening a single file. One line, 117 characters,
// no trailing newline — exactly what the gate expects.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I renamed the shared drive 'Final_FINAL_v2_REAL' and watched three managers approve it without opening a single file.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
