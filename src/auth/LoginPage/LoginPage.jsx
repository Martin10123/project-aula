import { login } from "../../assets";

import styles from "./login.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__content_img}>
        <img src={login} alt="Imagen relacionada al login" />
      </div>

      <div className={styles.login__content}>
        <h1>Login</h1>

        <form className={styles.login__form}>
          <div className={styles.login__content_input}>
            <i className="fa-solid fa-at"></i>
            <input
              className={styles.login__input}
              type="text"
              placeholder="Correo..."
            />
          </div>

          <div className={styles.login__content_input}>
            <i className="fa-solid fa-lock"></i>
            <input
              className={styles.login__input}
              type="password"
              placeholder="Contraseña..."
            />
          </div>

          <button className={styles.login__button}>Ingresar</button>
        </form>

        <p className={styles.login__forgot_password}>
          ¿Olvidaste tu contraseña?
        </p>

        <span className={styles.login__redirect_register}>
          ¿Aún no tienes cuenta? <a href="#">Registrate</a>
        </span>
      </div>
    </div>
  );
};
