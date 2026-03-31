const fs = require('fs');
const path = require('path');
const file = process.argv[2];
const text = fs.readFileSync(file, 'utf8');
const imports = [];
for (const m of text.matchAll(/await import\((['"])(.+?)\1\)/g)) imports.push(m[2]);
for (const m of text.matchAll(/from\s+(['"])(.+?)\1/g)) imports.push(m[2]);
console.log(JSON.stringify([...new Set(imports)], null, 2));
