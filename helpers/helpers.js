export const ValidateLogin = (login) => /^[A-Za-z0-9_]*$/.test(login);
export const ValidatePhone = (phoneNumber) => /^[0-9]*$/.test(phoneNumber);