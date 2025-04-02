const invisibleSpecialCharacters = {
  "zero-width_non-joiner": {
    character: "‌",
    value: 0,
  },
  "zero-width_joiner": {
    character: "‍",
    value: 1,
  },
};

const invisibleSpecialCharactersList = [];

for (const name in invisibleSpecialCharacters) {
  invisibleSpecialCharactersList.push(invisibleSpecialCharacters[name].character);
}

function normalizeText(text) {
  return removeWatermark(text.trim().replace("\r", ""));
}

function removeWatermark(text) {
  return text
    .split("")
    .filter((character) => !invisibleSpecialCharactersList.includes(character))
    .join("");
}

function encodeWatermark(text) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(text);
  const result = [];

  for (const byte of bytes) {
    for (let i = 7; i >= 0; i--) {
      const bit = (byte >> i) & 1;
      result.push(bit === 0 ? invisibleSpecialCharactersList[0] : invisibleSpecialCharactersList[1]);
    }
  }

  return result.join("");
}

function insertWatermark(watermark, text) {
  if (text === "") {
    return watermark;
  }

  let words = text.split(" ");

  if (words.length === 1) {
    let word = words[0];
    let middle = Math.floor(word.length / 2);
    return word.slice(0, middle) + watermark + word.slice(middle);
  } else {
    let parts = [];
    for (let i = 0; i < words.length - 1; i++) {
      parts.push(words[i]);
      if (i % 20 === 0) {
        parts.push(watermark);
      }
      parts.push(" ");
    }
    parts.push(words[words.length - 1]);
    return parts.join("");
  }
}

function applyWatermark(watermark, text) {
  return insertWatermark(encodeWatermark(normalizeText(watermark.trim())), normalizeText(text));
}

function decodeWatermark(watermark) {
  const byteArray = [];
  for (let i = 0; i < watermark.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) {
      const char = watermark[i + j];
      if (char === invisibleSpecialCharactersList[0]) {
        byte = byte << 1;
      } else {
        byte = (byte << 1) | 1;
      }
    }
    byteArray.push(byte);
  }

  const uint8Array = new Uint8Array(byteArray);
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(uint8Array);
}

function extractWatermarks(text) {
  const regex = "[" + invisibleSpecialCharactersList.join("") + "]{2,}";
  return text.match(new RegExp(regex, "g")) || [];
}

function filterValidWatermarks(list) {
  return list.filter((watermark) => watermark.length % 8 === 0);
}

function filterInalidWatermarks(list) {
  return list.filter((watermark) => watermark.length % 8 !== 0);
}

function hasInvalidWatermark(list) {
  return list.some((watermark) => watermark.length % 8 !== 0);
}

function removeDuplicateWatermarks(list) {
  return [...new Set(list)];
}

function getWatermarksWithStatus(text) {
  const extractedWatermarks = extractWatermarks(text);
  const uniqueWatermarks = removeDuplicateWatermarks(extractedWatermarks);
  const validWatermarks = filterValidWatermarks(uniqueWatermarks);
  const invalidCount = uniqueWatermarks.length - validWatermarks.length;

  const decodedWatermarks = validWatermarks.map(watermark => {
     return decodeWatermark(watermark);
  }).filter(Boolean);

  return {
    decodedWatermarks,
    status: {
      valid: decodedWatermarks.length,
      invalid: invalidCount
    }
  };
}

export { applyWatermark, getWatermarksWithStatus };
