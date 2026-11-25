// the bounty's single line lives in entry.txt; this program just emits it.
import { mkdirSync, writeFileSync } from 'node:fs';
const LINE = 'I told my wife her eyebrows were drawn too high. She looked surprised.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
