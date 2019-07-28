"use strict";

const _ = {
  clamp(number, lower, upper) {
    if (upper === undefined) {
      upper = lower;
      return number > upper ? upper : number;
    }
    return number < lower ? lower : number > upper ? upper : number;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      [start, end] = [end, start];
    }
    return number >= start && number < end;
  },
  words(string) {
    return string.split(" ");
  },
  pad(string, length) {
    const padding = length - string.length;
    if (padding < 1) return string;
    const paddingLeft = Math.floor(padding / 2);
    const paddingRight = padding - paddingLeft;
    return " ".repeat(paddingLeft) + string + " ".repeat(paddingRight);
  },
  has(object, key) {
    return object[key] !== undefined;
  },
  invert(object) {
    const inverted = {};
    for (let key in object) {
      const value = object[key];
      inverted[value] = key;
    }
    return inverted;
  },
  findKey(object, predicate) {
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
  },
  drop(array, n) {
    if (n === undefined) n = 1;
    if (typeof n !== "number" || n < 1) throw new Error("Illegal argument");
    return array.slice(n);
  },
  dropWhile(array, predicate) {
    const n = array.findIndex((e, i) => !predicate(e, i, array));
    return this.drop(array, n);
  },
  chunk(array, size) {
    if (size === undefined) size = 1;
    const chunks = [];
    const length = array.length;
    for (let start = 0; start < length; start += size) {
      const end = start + size;
      const chunk = array.slice(start, end);
      chunks.push(chunk);
    }
    return chunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
