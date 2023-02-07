export const dateIsValid = (date) => {
  const today = new Date();
  const birthday = new Date(date);
  let age = today.getFullYear() - birthday.getFullYear();
  const result = today.getMonth() - birthday.getMonth();
  if (result < 0 || (result === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

export const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validateName = (name) => {
  let regEx = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
  if (name.match(regEx) && name.length > 0) {
    return true;
  } else {
    return false;
  }
};

const validatePassword = (password) => {
  // Debe tener al menos 8 caracteres
  if (password.length < 8) {
    return false;
  }
  // Debe contener al menos una letra mayúscula, una minúscula y un número
  let mayus = false;
  let minus = false;
  let num = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      mayus = true;
    } else if (password[i] >= "a" && password[i] <= "z") {
      minus = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      num = true;
    }
  }
  if (mayus && minus && num) {
    return true;
  }
  return false;
};

export const ValidatorRegister = {
  birthday: [
    (value) => value === "" || dateIsValid(value) <= 18,
    "Debes de ser mayor de edad",
  ],
  displayName: [
    (value) => validateName(value) === false,
    "Ingrese su nombre real",
  ],
  lastName: [
    (value) => validateName(value) === false,
    "Ingrese su apellido real",
  ],
  email: [(value) => regex.test(value) === false, "Ingrese un email valido"],
  password1: [
    (value) => validatePassword(value) === false,
    "La contraseña debe de ser más larga y por lo menos una letra en mayúscula y un número",
  ],
  password2: [(p1, p2) => p1 !== p2, "Las contraseñas no coinciden"],
  phoneNumber: [
    (value) => value.trim().length !== 10 || isNaN(value),
    "Ingrese un número de telefono valido",
  ],
};
