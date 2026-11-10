export const NAME_MAX = 80;
export const EMAIL_MAX = 254;

const INVISIBLE = /[­؜᠎​-‏‪-‮⁠-⁩﻿]/g;
// eslint-disable-next-line no-control-regex
const CONTROL = /[\u0000-\u001f\u007f-\u009f]/g;

const NAME_PATTERN = /^\p{L}[\p{L}\p{M}' .’-]*$/u;

const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/;

export function cleanName(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.slice(0, 500).normalize("NFKC").replace(INVISIBLE, "").replace(CONTROL, " ").replace(/\s+/g, " ").trim();
}

export function nameError(name: string): string | null {
  if (!name) return "Enter your name.";
  if (name.length > NAME_MAX) return "That name is too long.";
  if (!NAME_PATTERN.test(name)) return "Use letters only in your name.";
  if (/\.\p{L}/u.test(name)) return "Use letters only in your name.";
  return null;
}

export function cleanEmail(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.slice(0, 500).normalize("NFKC").replace(INVISIBLE, "").replace(CONTROL, "").trim().toLowerCase();
}

export function emailError(email: string): string | null {
  if (!email || email.length > EMAIL_MAX || !EMAIL_PATTERN.test(email) || email.includes("..")) {
    return "Enter a valid email.";
  }
  return null;
}
