export const isNumber = (value) => !isNaN(value);

export const isValidEmail = (email) =>
  email?.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export const isValidPostCode = (postCode) => postCode?.length === 4;
