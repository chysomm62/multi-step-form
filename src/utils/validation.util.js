export const required = (value) => (value ? undefined : "Field is required");

export const mustBeNumber = (value) =>
  isNaN(value) ? "Field must be a number" : undefined;

export const mustBeLessThan30 = (value) =>
  value.length > 30 ? "Field must be less than thirty characters" : undefined;

export const mustBeGreaterThan8 = (value) =>
  value.length < 8 ? "Field must contain at least 8 characters" : undefined;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

//export const mustContainNumber = (value) => (!/^(?=.*[0-9])[0-9]$/)

export const mustContainSpecialChar = (value) =>
  !/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,50}$/.test(value)
    ? "Field must contain at least one of !, @, #, $, %, ^, &, and *"
    : undefined;

export const mustBeLettersOnly = (value) =>
  !/^([a-zA-Z-]+)$/.test(value) ? "Field can only contain letters" : undefined;

export const canBeAlphanumeric = (value) =>
  !/^([a-zA-Z0-9-\s]+)$/.test(value)
    ? "Field can only contain letters, numbers, '-'"
    : undefined;

export const mustBeEmail = (value) =>
  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ? "Invalid email"
    : undefined;

export const mustBePhone = (value) =>
  !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)
    ? "Invalid Phone Number"
    : undefined;

// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/

/*const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`*/

/*const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)*/

/*export const validateDetails = (detail) => {
  let output = { error: false, message: "" };
  if (detail.length > 70) {
    output.error = true;
    output.message = "This cannot exceed 70 characters";
  }
  if (detail && !/^([a-zA-Z0-9&\,\'\.\;\:\-\s]+)$/.test(detail)) {
    output.error = true;
    output.message = "Unwanted character was added";
  }

  return output;
};*/

/*export const validateAddress = (address) => {
  let output = { error: false, message: "" };
  // if (address.length > 70) {
  //   output.error = true;
  //   output.message = "Address cannot exceed 70 characters";
  // }
  if (address && !/^([a-zA-Z0-9&\,\'\.\-\s]+)$/.test(address)) {
    output.error = true;
    output.message =
      "Address can only contain letters, numbers, comma, ', ., -.";
  }

  return output;
};*/

// export const validatePhone = (phone) => {
//   let output = { error: false, message: "" };

//   if (phone && !/^-?\d+\.?\d*$/.test(phone)) {
//     output.error = true;
//     output.message = "Phone can only contain numbers.";
//   }

//   return output;
// };

/*export const validateConfirmPassword = (confirmPassword, password) => {
  let output = { error: false, message: "" };
  if (confirmPassword.length !== password) {
    output.error = true;
    output.message = "Password Mismatch.";
  }

  return output;
};*/
