// Generate PNG icons from SVG using pure Node.js
const fs = require('fs');
const { createPNG } = (() => {
  // Pure PNG encoder - no external dependencies
  const zlib = require('zlib');

  function createPNG(width, height, drawFn) {
    const canvas = new Uint8Array(width * height * 4);
    drawFn(canvas, width, height);
    return encodePNG(canvas, width, height);
  }

  function encodePNG(pixels, width, height) {
    // PNG signature
    const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

    // IHDR chunk
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0);
    ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8; // bit depth
    ihdr[9] = 6; // color type: RGBA
    ihdr[10] = 0; // compression
    ihdr[11] = 0; // filter
    ihdr[12] = 0; // interlace
    const ihdrChunk = makeChunk('IHDR', ihdr);

    // IDAT chunk - raw pixel data with filter bytes
    const rawData = Buffer.alloc(height * (1 + width * 4));
    for (let y = 0; y < height; y++) {
      rawData[y * (1 + width * 4)] = 0; // no filter
      for (let x = 0; x < width; x++) {
        const srcIdx = (y * width + x) * 4;
        const dstIdx = y * (1 + width * 4) + 1 + x * 4;
        rawData[dstIdx] = pixels[srcIdx];
        rawData[dstIdx + 1] = pixels[srcIdx + 1];
        rawData[dstIdx + 2] = pixels[srcIdx + 2];
        rawData[dstIdx + 3] = pixels[srcIdx + 3];
      }
    }
    const compressed = zlib.deflateSync(rawData);
    const idatChunk = makeChunk('IDAT', compressed);

    // IEND chunk
    const iendChunk = makeChunk('IEND', Buffer.alloc(0));

    return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  }

  function makeChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuffer = Buffer.from(type, 'ascii');
    const crcData = Buffer.concat([typeBuffer, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(crcData), 0);
    return Buffer.concat([length, typeBuffer, data, crc]);
  }

  function crc32(buf) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
      }
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  return { createPNG };
})();

// Gradient interpolation
function lerp(a, b, t) { return a + (b - a) * t; }

function drawIcon(pixels, width, height) {
  const cx = width / 2, cy = height / 2;
  const radius = width / 2;
  const cornerRadius = width * 0.1875; // ~96/512

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const t = (x + y) / (width + height);

      // Rounded rect check
      if (isInsideRoundedRect(x, y, 0, 0, width, height, cornerRadius)) {
        // Gradient from #6c63ff to #e94560
        pixels[idx] = Math.round(lerp(0x6c, 0xe9, t));
        pixels[idx + 1] = Math.round(lerp(0x63, 0x45, t));
        pixels[idx + 2] = Math.round(lerp(0xff, 0x60, t));
        pixels[idx + 3] = 255;
      } else {
        pixels[idx + 3] = 0; // transparent
      }
    }
  }

  // Draw Psi (ψ) symbol - simplified
  drawPsiSymbol(pixels, width, height);
}

function isInsideRoundedRect(x, y, rx, ry, rw, rh, cr) {
  if (x < rx + cr && y < ry + cr) {
    return Math.hypot(x - (rx + cr), y - (ry + cr)) <= cr;
  }
  if (x > rx + rw - cr && y < ry + cr) {
    return Math.hypot(x - (rx + rw - cr), y - (ry + cr)) <= cr;
  }
  if (x < rx + cr && y > ry + rh - cr) {
    return Math.hypot(x - (rx + cr), y - (ry + rh - cr)) <= cr;
  }
  if (x > rx + rw - cr && y > ry + rh - cr) {
    return Math.hypot(x - (rx + rw - cr), y - (ry + rh - cr)) <= cr;
  }
  return x >= rx && x < rx + rw && y >= ry && y < ry + rh;
}

function drawPsiSymbol(pixels, width, height) {
  const cx = width / 2;
  const stemWidth = width * 0.08;
  const armWidth = width * 0.06;

  // Vertical stem (full height of symbol area)
  const stemTop = height * 0.15;
  const stemBottom = height * 0.85;
  fillRect(pixels, width, height, cx - stemWidth / 2, stemTop, stemWidth, stemBottom - stemTop, 255, 255, 255, 255);

  // Left arm (curved outward)
  const armStartY = height * 0.25;
  const armEndY = height * 0.55;
  for (let y = Math.floor(armStartY); y < Math.floor(armEndY); y++) {
    const t = (y - armStartY) / (armEndY - armStartY);
    const curve = Math.sin(t * Math.PI) * width * 0.22;
    const ax = cx - curve;
    fillRect(pixels, width, height, ax - armWidth / 2, y, armWidth, 1, 255, 255, 255, 255);
  }

  // Right arm (curved outward)
  for (let y = Math.floor(armStartY); y < Math.floor(armEndY); y++) {
    const t = (y - armStartY) / (armEndY - armStartY);
    const curve = Math.sin(t * Math.PI) * width * 0.22;
    const ax = cx + curve;
    fillRect(pixels, width, height, ax - armWidth / 2, y, armWidth, 1, 255, 255, 255, 255);
  }
}

function fillRect(pixels, canvasW, canvasH, x, y, w, h, r, g, b, a) {
  const x0 = Math.max(0, Math.floor(x));
  const y0 = Math.max(0, Math.floor(y));
  const x1 = Math.min(canvasW, Math.ceil(x + w));
  const y1 = Math.min(canvasH, Math.ceil(y + h));
  for (let py = y0; py < y1; py++) {
    for (let px = x0; px < x1; px++) {
      const idx = (py * canvasW + px) * 4;
      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = a;
    }
  }
}

function drawOgImage(pixels, width, height) {
  // Background gradient #1a1a2e -> #0f3460
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const t = (x + y) / (width + height);
      pixels[idx] = Math.round(lerp(0x1a, 0x0f, t));
      pixels[idx + 1] = Math.round(lerp(0x1a, 0x34, t));
      pixels[idx + 2] = Math.round(lerp(0x2e, 0x60, t));
      pixels[idx + 3] = 255;
    }
  }

  // Accent bar at bottom
  const barHeight = 12;
  for (let y = height - barHeight; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const t = x / width;
      pixels[idx] = Math.round(lerp(0x6c, 0xe9, t));
      pixels[idx + 1] = Math.round(lerp(0x63, 0x45, t));
      pixels[idx + 2] = Math.round(lerp(0xff, 0x60, t));
    }
  }

  // Draw Psi symbol on the left
  const psiSize = 200;
  const psiX = 120, psiY = height / 2 - psiSize / 2;

  // Circle behind psi
  const circleCx = psiX + psiSize / 2;
  const circleCy = psiY + psiSize / 2;
  const circleR = psiSize / 2 + 20;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (Math.hypot(x - circleCx, y - circleCy) <= circleR) {
        const idx = (y * width + x) * 4;
        // Blend with accent color at low opacity
        const t = (x + y) / (width + height);
        pixels[idx] = Math.round(pixels[idx] * 0.85 + lerp(0x6c, 0xe9, t) * 0.15);
        pixels[idx + 1] = Math.round(pixels[idx + 1] * 0.85 + lerp(0x63, 0x45, t) * 0.15);
        pixels[idx + 2] = Math.round(pixels[idx + 2] * 0.85 + lerp(0xff, 0x60, t) * 0.15);
      }
    }
  }

  // Mini psi in circle
  const psiStemW = 14;
  const psiArmW = 10;
  const psiCx = circleCx;
  const psiTop = circleCy - 80;
  const psiBot = circleCy + 80;
  fillRect(pixels, width, height, psiCx - psiStemW / 2, psiTop, psiStemW, psiBot - psiTop, 0x6c, 0x63, 0xff, 255);

  const armStart = circleCy - 60;
  const armEnd = circleCy + 20;
  for (let y = Math.floor(armStart); y < Math.floor(armEnd); y++) {
    const t = (y - armStart) / (armEnd - armStart);
    const curve = Math.sin(t * Math.PI) * 55;
    fillRect(pixels, width, height, psiCx - curve - psiArmW / 2, y, psiArmW, 1, 0x6c, 0x63, 0xff, 255);
    fillRect(pixels, width, height, psiCx + curve - psiArmW / 2, y, psiArmW, 1, 0x6c, 0x63, 0xff, 255);
  }

  // "PsyLearn" text - large block letters
  drawText(pixels, width, height, 'PSYLEARN', 380, 200, 4, 255, 255, 255);
  // Subtitle
  drawText(pixels, width, height, 'PSYCHOLOGY & LIFE', 380, 320, 2, 0xa0, 0xa0, 0xc0);
  // Tagline
  drawText(pixels, width, height, 'CHAPTERS  QUIZZES  FLASHCARDS', 380, 400, 1.5, 0x6c, 0x63, 0xff);
}

// Simple 5x7 bitmap font
const FONT = {
  'A': ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  'B': ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  'C': ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
  'D': ['11100', '10010', '10001', '10001', '10001', '10010', '11100'],
  'E': ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  'F': ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  'G': ['01110', '10001', '10000', '10011', '10001', '10001', '01110'],
  'H': ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  'I': ['01110', '00100', '00100', '00100', '00100', '00100', '01110'],
  'J': ['00111', '00010', '00010', '00010', '00010', '10010', '01100'],
  'K': ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  'L': ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  'M': ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  'N': ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  'O': ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  'P': ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  'Q': ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  'R': ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  'S': ['01110', '10001', '10000', '01110', '00001', '10001', '01110'],
  'T': ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  'U': ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  'V': ['10001', '10001', '10001', '10001', '01010', '01010', '00100'],
  'W': ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  'X': ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  'Y': ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  'Z': ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  '&': ['01100', '10010', '01100', '01101', '10010', '10010', '01101'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
};

function drawText(pixels, canvasW, canvasH, text, startX, startY, scale, r, g, b) {
  const pixelSize = Math.round(scale * 2);
  const charSpacing = Math.round(6 * scale * 2);

  let x = startX;
  for (const ch of text) {
    const glyph = FONT[ch] || FONT[' '];
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 5; col++) {
        if (glyph[row][col] === '1') {
          fillRect(pixels, canvasW, canvasH,
            x + col * pixelSize, startY + row * pixelSize,
            pixelSize, pixelSize, r, g, b, 255);
        }
      }
    }
    x += charSpacing;
  }
}

// Generate all icons
const sizes = [
  { name: 'icon-16.png', size: 16 },
  { name: 'icon-32.png', size: 32 },
  { name: 'icon-180.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

const outDir = './public/icons';

for (const { name, size } of sizes) {
  const pixels = new Uint8Array(size * size * 4);
  drawIcon(pixels, size, size);
  const png = createPNG(size, size, (p, w, h) => { p.set(pixels); });
  fs.writeFileSync(`${outDir}/${name}`, png);
  console.log(`Generated ${name} (${size}x${size})`);
}

// Generate OG image (1200x630)
const ogW = 1200, ogH = 630;
const ogPixels = new Uint8Array(ogW * ogH * 4);
drawOgImage(ogPixels, ogW, ogH);
const ogPng = createPNG(ogW, ogH, (p) => { p.set(ogPixels); });
fs.writeFileSync('./public/og-image.png', ogPng);
console.log('Generated og-image.png (1200x630)');

console.log('Done! All icons generated.');
