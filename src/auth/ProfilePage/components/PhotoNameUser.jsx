import { photoUser } from "../../../assets";

import styles from "../page/profile.module.css";

export const PhotoNameUser = () => {
  return (
    <div className={styles.user__info_perso_profile}>
      <div className={styles.user__photo_profile}>
        <img src={photoUser} alt="Foto de perfil" />

        <div className={styles.user__camera_change_photo}>
          <i className="fa-solid fa-camera"></i>
        </div>
      </div>

      <span>
        <p className={styles.user__name}>Martin Elias</p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est,
          reprehenderit itaque dolores magnam placeat quas officiis? Error
          commodi omnis neque sit nisi dolores expedita repellendus consectetur
          non voluptatem? Repellendus!
        </span>
      </span>
    </div>
  );
};
