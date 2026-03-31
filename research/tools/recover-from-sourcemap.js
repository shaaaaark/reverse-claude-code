const fs = require('fs');
const path = require('path');

const mapPath = process.argv[2];
const outDir = process.argv[3];
if (!mapPath || !outDir) {
  console.error('Usage: node recover-from-sourcemap.js <cli.js.map> <outDir>');
  process.exit(1);
}

const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const sources = map.sources || [];
const contents = map.sourcesContent || [];
fs.mkdirSync(outDir, { recursive: true });

const stats = {
  totalSources: sources.length,
  recoveredFiles: 0,
  skippedNullContent: 0,
  collisions: 0,
  categoryCounts: {},
};

function safeRel(p, idx) {
  let rel = String(p || `unknown-${idx}.txt`);
  rel = rel.replace(/^([A-Za-z]:)?[\\/]+/, '');
  rel = rel.replace(/\\/g, '/');
  rel = rel.replace(/\.\.(\/|$)/g, '__up__/');
  rel = rel.replace(/^\//, '');
  if (!rel || rel === '.') rel = `unknown-${idx}.txt`;
  return rel;
}

for (let i = 0; i < sources.length; i++) {
  const src = sources[i];
  const content = contents[i];
  if (content == null) {
    stats.skippedNullContent++;
    continue;
  }
  const rel = safeRel(src, i);
  const first = rel.split('/')[0] || 'root';
  stats.categoryCounts[first] = (stats.categoryCounts[first] || 0) + 1;
  let target = path.join(outDir, rel);
  if (fs.existsSync(target)) {
    stats.collisions++;
    target = path.join(outDir, `${rel}.__dup_${i}`);
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, 'utf8');
  stats.recoveredFiles++;
}

fs.writeFileSync(path.join(outDir, '_recovery_stats.json'), JSON.stringify(stats, null, 2));
console.log(JSON.stringify(stats, null, 2));
