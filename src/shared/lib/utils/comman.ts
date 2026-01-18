export const getUserEmailPrefix = (email?: string) => {
  if (!email) return "";
  return `@${email.split("@")[0]}`;
};
