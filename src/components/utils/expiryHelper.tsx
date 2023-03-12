const ERROR_TEXT__INVALID_EXPIRY_DATE = 'Expiry date is invalid';
const ERROR_TEXT__MONTH_OUT_OF_RANGE = 'Expiry month must be between 01 and 12';
const ERROR_TEXT__YEAR_OUT_OF_RANGE = 'Expiry year cannot be in the past';

const EXPIRY_DATE_REGEX = /^(\d{2})\/(\d{4}|\d{2})$/;
const MONTH_REGEX = /(0[1-9]|1[0-2])/;

export const isExpiryInvalid = (expiryDate: string) => {
  const splitDate = expiryDate.split('/');
  if (!EXPIRY_DATE_REGEX.test(expiryDate)) {
    return ERROR_TEXT__INVALID_EXPIRY_DATE;
  }

  const expiryMonth = splitDate[0];
  if (!MONTH_REGEX.test(expiryMonth)) {
    return ERROR_TEXT__MONTH_OUT_OF_RANGE;
  }

  const expiryYear = splitDate[1];
  let currentYear = new Date().getFullYear();
  currentYear = parseInt(
    expiryYear.length === 4 ? currentYear.toString() : currentYear.toString().substr(-2),
    10
  );
  if (currentYear > parseInt(expiryYear, 10)) {
    return ERROR_TEXT__YEAR_OUT_OF_RANGE;
  }

  return false;
};

export const formatData = (data: string) => {
  const onlyNumbers = data.replace(/[^\d]/g, '');
  const expDate = onlyNumbers;
  const expDateFormatted =
    expDate.replace(/\//g, '').substring(0, 2) +
    (expDate.length > 2 ? '/' : '') +
    expDate.replace(/\//g, '').substring(2, 4);
  return expDateFormatted;
};

export const formatCardNumber = (value: string) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, '');

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(' ')
  );
};
