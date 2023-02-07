import { createContext, useState } from "react";
import { ValidatorRegister } from "../../../helpers";
import { useForm } from "../../../hooks";

export const RegisterProvider = createContext();

const dataForm = {
  birthday: "",
  displayName: "",
  email: "",
  gender: "Hombre",
  lastName: "",
  password1: "",
  password2: "",
  phoneNumber: "",
};

export const RegisterContext = ({ children }) => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const { formState, formValidation, isFormValid, onInputChange } = useForm(
    dataForm,
    ValidatorRegister
  );

  return (
    <RegisterProvider.Provider
      value={{
        formState,
        formSubmitted,
        formValidation,
        isFormValid,
        onInputChange,
        setformSubmitted,
      }}
    >
      {children}
    </RegisterProvider.Provider>
  );
};
