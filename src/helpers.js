/* eslint-disable import/prefer-default-export */
export function generateId(prefix, min, max) {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * (max - min + 1)) + min}`;
}
