// Ilustraciones vectoriales de producto (placeholders hasta tener fotos reales).
// Cada una usa el mismo lenguaje: metal plateado + azul de marca sobre fondo oscuro.

const hex = (cx, cy, r, rot = 0) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = ((60 * i + rot) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const ring = (cx, cy, r, n, rot = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = ((360 / n) * i + rot) * (Math.PI / 180);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-m`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f2f5fa" />
        <stop offset=".45" stopColor="#9aa3b2" />
        <stop offset="1" stopColor="#4b5262" />
      </linearGradient>
      <linearGradient id={`${id}-b`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#59a8ff" />
        <stop offset="1" stopColor="#1456d6" />
      </linearGradient>
      <linearGradient id={`${id}-d`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3a3f4b" />
        <stop offset="1" stopColor="#14161c" />
      </linearGradient>
    </defs>
  );
}

const arts = {
  chain: (g) => (
    <>
      <circle cx="100" cy="100" r="62" fill="none" stroke={g.m} strokeWidth="16" strokeDasharray="9.7 9.7" />
      <circle cx="100" cy="100" r="54" fill={g.m} />
      <circle cx="100" cy="100" r="40" fill="#14161c" />
      <circle cx="100" cy="100" r="16" fill={g.b} />
      {ring(100, 100, 29, 6).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={g.m} />
      ))}
      <circle cx="100" cy="100" r="6" fill="#14161c" />
      <rect x="28" y="154" width="150" height="14" rx="7" fill="none" stroke={g.b} strokeWidth="5" strokeDasharray="9 6" />
    </>
  ),
  brake: (g) => (
    <>
      <circle cx="100" cy="100" r="76" fill={g.m} />
      <circle cx="100" cy="100" r="62" fill="none" stroke="#14161c" strokeWidth="3" opacity=".5" />
      {ring(100, 100, 48, 16).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="#14161c" />
      ))}
      <circle cx="100" cy="100" r="26" fill="#14161c" />
      {ring(100, 100, 15, 5).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill={g.m} />
      ))}
      <path d="M150 38c18 14 26 36 22 60l-20-4c3-16-2-30-12-42Z" fill={g.b} />
      <rect x="150" y="46" width="22" height="9" rx="3" fill="#0b2d73" transform="rotate(38 160 50)" />
    </>
  ),
  oil: (g) => (
    <>
      <rect x="62" y="52" width="76" height="120" rx="14" fill={g.d} stroke={g.m} strokeWidth="3" />
      <rect x="82" y="28" width="36" height="28" rx="6" fill={g.m} />
      <rect x="72" y="86" width="56" height="58" rx="6" fill={g.b} />
      <path d="M100 98c8 12 12 18 12 24a12 12 0 0 1-24 0c0-6 4-12 12-24Z" fill="#f2f5fa" />
      <rect x="72" y="150" width="56" height="6" rx="3" fill={g.m} opacity=".6" />
    </>
  ),
  plug: (g) => (
    <>
      <rect x="86" y="22" width="28" height="22" rx="4" fill={g.d} stroke={g.m} strokeWidth="3" />
      <rect x="82" y="44" width="36" height="58" rx="6" fill="#e9edf3" />
      <rect x="82" y="60" width="36" height="6" fill="#c9d0db" />
      <rect x="82" y="76" width="36" height="6" fill="#c9d0db" />
      <polygon points={hex(100, 112, 24, 30)} fill={g.m} />
      <rect x="88" y="132" width="24" height="30" fill={g.m} />
      <path d="M100 162v14h14" fill="none" stroke={g.b} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="95" y="136" width="10" height="26" fill="#4b5262" opacity=".5" />
    </>
  ),
  battery: (g) => (
    <>
      <rect x="26" y="62" width="148" height="96" rx="12" fill={g.d} stroke={g.m} strokeWidth="3" />
      <rect x="44" y="44" width="28" height="20" rx="4" fill={g.m} />
      <rect x="128" y="44" width="28" height="20" rx="4" fill={g.b} />
      <rect x="26" y="62" width="148" height="22" rx="10" fill={g.b} />
      <path d="M104 94 84 124h16l-6 26 24-34h-16l6-22Z" fill="#f2f5fa" />
    </>
  ),
  tire: (g) => (
    <>
      <circle cx="100" cy="100" r="78" fill="#14161c" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="#3a3f4b" strokeWidth="10" strokeDasharray="6 8" />
      <circle cx="100" cy="100" r="60" fill="#0d0f14" stroke={g.m} strokeWidth="2" />
      <circle cx="100" cy="100" r="44" fill={g.m} />
      <circle cx="100" cy="100" r="34" fill="#14161c" />
      {ring(100, 100, 40, 8).map(([x, y], i) => (
        <line key={i} x1="100" y1="100" x2={x} y2={y} stroke={g.m} strokeWidth="5" />
      ))}
      <circle cx="100" cy="100" r="12" fill={g.b} />
    </>
  ),
  filter: (g) => (
    <>
      <rect x="54" y="40" width="92" height="124" rx="12" fill={g.b} />
      <rect x="54" y="40" width="92" height="22" rx="10" fill={g.m} />
      <rect x="54" y="144" width="92" height="20" rx="10" fill={g.m} />
      {[78, 92, 106, 120].map((x) => (
        <rect key={x} x={x} y="66" width="7" height="76" rx="3" fill="#0b2d73" opacity=".55" />
      ))}
      <rect x="70" y="26" width="60" height="18" rx="5" fill={g.d} stroke={g.m} strokeWidth="3" />
    </>
  ),
  helmet: (g) => (
    <>
      <path d="M26 122C26 66 62 32 108 32c42 0 68 32 68 78v26c0 10-7 16-16 16H56c-18 0-30-10-30-30Z" fill={g.b} />
      <path d="M26 122C26 66 62 32 108 32c42 0 68 32 68 78v26c0 10-7 16-16 16H56c-18 0-30-10-30-30Z" fill="none" stroke={g.m} strokeWidth="3" />
      <path d="M92 82h82l2 40H98c-10 0-14-6-12-18Z" fill="#0b0d12" />
      <path d="M100 88h40l-12 28h-28Z" fill="#fff" opacity=".12" />
      <rect x="30" y="140" width="130" height="14" rx="7" fill={g.d} />
      <circle cx="62" cy="118" r="9" fill={g.m} />
    </>
  ),
  wrench: (g) => (
    <>
      <g transform="rotate(-38 100 100)">
        <rect x="90" y="56" width="20" height="116" rx="8" fill={g.m} />
        <path d="M70 52a30 30 0 0 1 60 0v22H112V52a12 12 0 0 0-24 0v22H70Z" fill={g.m} />
        <circle cx="100" cy="164" r="16" fill={g.m} />
        <circle cx="100" cy="164" r="7" fill="#14161c" />
      </g>
      <g transform="rotate(38 100 100)">
        <rect x="92" y="40" width="16" height="124" rx="6" fill={g.b} />
        <rect x="88" y="150" width="24" height="26" rx="5" fill={g.d} stroke={g.m} strokeWidth="3" />
      </g>
    </>
  ),
  bolts: (g) => (
    <>
      <polygon points={hex(70, 76, 40, 0)} fill={g.m} />
      <polygon points={hex(70, 76, 26, 0)} fill="#14161c" />
      <circle cx="70" cy="76" r="14" fill={g.m} />
      <polygon points={hex(138, 66, 24, 30)} fill={g.b} />
      <rect x="130" y="82" width="16" height="72" rx="3" fill={g.m} />
      {[92, 104, 116, 128, 140].map((y) => (
        <line key={y} x1="128" y1={y} x2="148" y2={y + 6} stroke="#4b5262" strokeWidth="3" />
      ))}
      <rect x="40" y="130" width="64" height="12" rx="6" fill={g.m} />
      <rect x="40" y="152" width="64" height="12" rx="6" fill={g.m} opacity=".6" />
    </>
  ),
  outlet: (g) => (
    <>
      <rect x="38" y="38" width="124" height="124" rx="22" fill={g.m} />
      <rect x="50" y="50" width="100" height="100" rx="14" fill="#e9edf3" />
      <circle cx="100" cy="100" r="40" fill="#cfd6e1" />
      <rect x="78" y="82" width="9" height="24" rx="3" fill="#14161c" />
      <rect x="113" y="82" width="9" height="24" rx="3" fill="#14161c" />
      <rect x="94" y="114" width="12" height="9" rx="3" fill="#14161c" />
      <circle cx="56" cy="56" r="4" fill={g.b} />
      <circle cx="144" cy="144" r="4" fill={g.b} />
    </>
  ),
  paint: (g) => (
    <>
      <path d="M52 66h96v88a10 10 0 0 1-10 10H62a10 10 0 0 1-10-10Z" fill={g.m} />
      <ellipse cx="100" cy="66" rx="48" ry="12" fill="#cfd6e1" />
      <ellipse cx="100" cy="66" rx="40" ry="8" fill={g.b} />
      <path d="M60 66c0 18 8 14 8 28s6 14 6 0 0-12 4-12" fill="none" stroke={g.b} strokeWidth="9" strokeLinecap="round" />
      <rect x="62" y="104" width="76" height="40" rx="5" fill={g.b} />
      <path d="M150 74c20 0 28 14 28 28" fill="none" stroke={g.m} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
};

function ProductArt({ name, id, className = "" }) {
  const g = { m: `url(#${id}-m)`, b: `url(#${id}-b)`, d: `url(#${id}-d)` };
  const draw = arts[name] || arts.chain;
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label="Ilustración del producto">
      <Defs id={id} />
      {draw(g)}
    </svg>
  );
}

export default ProductArt;
