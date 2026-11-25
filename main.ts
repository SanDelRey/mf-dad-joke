// entry.txt carries the bounty's one line; nothing else goes out.
import { mkdirSync, writeFileSync } from 'node:fs';
const LINE = 'I told my wife her eyebrows were drawn too high. She looked surprised.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
// no other file is written.
