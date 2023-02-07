import { useContext, useState } from "react";
import { register } from "../../../assets";
import { ButtonForm } from "../../helpers";
import { FormLayout } from "../../layout";
import { EmailPassword, InfoPersonal, OtherInfo } from "../components";
import { RegisterProvider } from "../context/RegisterContext";

import styles from "../components.module.css";

export const RegisterPage = () => {
  const [page, setPage] = useState(1);
  const {
    formState,
    formSubmitted,
    formValidation,
    isFormValid,
    onInputChange,
    setformSubmitted,
  } = useContext(RegisterProvider);

  const onChangePage = (e, num) => {
    e.preventDefault();

    const { displayNameValid, lastNameValid, phoneNumberValid } =
      formValidation;

    if (
      displayNameValid === null &&
      lastNameValid === null &&
      phoneNumberValid === null
    ) {
      const result = Math.max(0, Math.min(page + num, 3));
      setPage(result);
      setformSubmitted(false);
    } else {
      return setformSubmitted(true);
    }

    // TODO: Hacer lo mismo que hice arriba con los demas campos siguiendo el mismo camino que funciono
  };

  return (
    <FormLayout imageBack={register} title="Registrate" titleRedirect="Ingresa">
      {page === 1 && (
        <InfoPersonal
          formState={formState}
          formValidation={formValidation}
          onInputChange={onInputChange}
          formSubmitted={formSubmitted}
        />
      )}

      {page === 2 && (
        <EmailPassword
          formState={formState}
          formValidation={formValidation}
          onInputChange={onInputChange}
          formSubmitted={formSubmitted}
        />
      )}

      {page === 3 && (
        <OtherInfo
          formState={formState}
          formValidation={formValidation}
          onInputChange={onInputChange}
          formSubmitted={formSubmitted}
        />
      )}

      <div className={page === 2 ? styles.register__buttons : ""}>
        {page !== 1 && (
          <ButtonForm title="Volver" onSubmit={(e) => onChangePage(e, -1)} />
        )}

        {page !== 3 && (
          <ButtonForm title="Seguir" onSubmit={(e) => onChangePage(e, 1)} />
        )}
      </div>

      {page === 3 && <ButtonForm title="Registrarse" />}
    </FormLayout>
  );
};
