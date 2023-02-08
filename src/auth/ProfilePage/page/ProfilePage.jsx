import { useState } from "react";
import { ButtonForm } from "../../helpers";
import { OptionsMenu, PhotoNameUser, UserListItem } from "../components";

import styles from "./profile.module.css";

export const ProfilePage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.user__container}>
      <div className={styles.user__content}>
        <div className={styles.user__nav}>
          <i className="fa-solid fa-bars" onClick={() => setOpenMenu(true)}></i>
        </div>
        <PhotoNameUser />

        <div className={styles.user__list_info}>
          <UserListItem iconStyle="fa-solid fa-user" info="Martin1012" />
          <UserListItem
            iconStyle="fa-sharp fa-solid fa-phone"
            info="3006830624"
          />
          <UserListItem iconStyle="fa-solid fa-at" info="Martin@gmail.com" />
          <UserListItem iconStyle="fa-solid fa-clock" info="10-10-2023" />
          <UserListItem
            iconStyle="fa-solid fa-cake-candles"
            info="12-06-2001 (21 años)"
          />
          <UserListItem
            iconStyle="fa-solid fa-person-half-dress"
            info="Hombre"
          />
        </div>

        <div className={styles.user__button}>
          <ButtonForm title="Editar perfil" />
        </div>
      </div>
      <OptionsMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </div>
  );
};
