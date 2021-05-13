export const isValidCreditCardNumber = (number: string): boolean => {
  const valuated = String(!!number ? number : '').trim().replace(/\s/g, '');

  var regex = new RegExp("^[0-9]{16}$");

  return regex.test(valuated);
}

export const isValidSecurityNumber = (code: string): boolean => {
  const valuated = String(!!code ? code : '').trim().replace(/\s/g, '');

  var regex = new RegExp("^[0-9]{3}$");

  return regex.test(valuated);
}

export const isValidExpirationDate = (date: string): boolean => {
  const valuated = String(!!date ? date : '').trim().replace(/\s/g, '');

  if (valuated.length != 5)
    return false;

  const month = Number(valuated.substr(0, 2));
  if (month < 1 || month > 12)
    return false;

  const currentMonth = (new Date()).getMonth() + 1;
  const currentYear = Number(String((new Date()).getFullYear()).substr(2, 2));
  const year = Number(valuated.substr(3, 2));

  if (year == currentYear)
    return month >= currentMonth;
  else
    return year > currentYear;
}

export const isValidHolder = (holder: string): boolean => {
  return true;
}
