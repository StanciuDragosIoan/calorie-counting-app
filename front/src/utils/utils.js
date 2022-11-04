/*
 * validation (email and password)
 */
export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

//uppercase, lowercase, 1 digit, one special symbol, more than 4 chars length
export const validatePassword = (pw) => {
  return (
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    /[^A-Za-z0-9]/.test(pw) &&
    pw.length > 4
  );
};
