import styles from "./components.module.css";

const dataMenu = [
  { title: "Agendar cita", icon: "fa-solid fa-calendar-plus" },
  { title: "Ver mis citas", icon: "fa-solid fa-eye" },
  { title: "Home", icon: "fa-solid fa-house-chimney" },
  { title: "Store", icon: "fa-solid fa-store" },
  { title: "Mensajes", icon: "fa-brands fa-facebook-messenger" },
  { title: "Editar perfil", icon: "fa-solid fa-pen-to-square" },
  { title: "Configuraciones", icon: "fa-solid fa-gear" },
];

export const OptionsMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`${styles.menu__container} ${
        openMenu ? styles.menu__show : ""
      }`}
    >
      <div
        className={styles.menu__back}
        onClick={() => setOpenMenu(false)}
      ></div>

      <ul className={styles.menu__list}>
        {dataMenu.map(({ icon, title }) => (
          <li className={styles.menu__item} key={title}>
            <i className={icon}></i>
            {title}
          </li>
        ))}

        <div className={styles.menu__button_logout}>
          <p>Cerrar cesión</p>
        </div>
      </ul>
    </div>
  );
};
