import { photoUser } from "../../assets";
import { InputForm, ButtonForm } from "../../auth";
import { dataDays, dataHours } from "../../helpers";

import styles from "./schedule.module.css";

export const Schedule = () => {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas asperiores nam. Sapiente nesciunt architecto adipisci reiciendis hic fugit iure ex? Porro ea facilis";

  return (
    <div className={styles.schedule__container}>
      <div className={styles.schedule__content}>
        <div className={styles.schedule__nav}>
          <p>Agendar cita</p>

          <button className={styles.schedule__btn_close}>X</button>
        </div>

        <div className={styles.schedule__form}>
          <InputForm
            styleIcon="fa-solid fa-person-digging"
            type="text"
            placeholder="Buscar un trabajador..."
          />

          <div className={styles.schedule__autocomplete}>
            <div className={styles.schedule__info_prof}>
              <div className={styles.schedule__photo}>
                <img src={photoUser} alt="Foto del profesional" />
              </div>
              <div className={styles.schedule__name}>
                <p>Luis Perez</p>
                <span>Albañil</span>
              </div>
            </div>

            <div className={styles.schedule__view_more}>
              <p>Ver a todos en lista</p>
            </div>
          </div>

          <div className={styles.schedule__card_prof_selected}>
            <div className={styles.schedule__card_info}>
              <div className={styles.schedule__card_photo}>
                <img src={photoUser} alt="Foto del profesional" />
              </div>

              <div className={styles.schedule__card_name}>
                <p>Martin Simarra</p>
                <span>Albañil</span>
              </div>

              <div className={styles.schedule__card_desc}>
                <p>{text.substring(0, 100) + "..."}</p>
              </div>

              <div className={styles.schedule__disponibility}>
                <p>
                  <i className="fa-solid fa-clock"></i>
                  10:00 a.m. - 8:00 p.m.
                </p>
                <p>
                  <i className="fa-solid fa-cloud-sun"></i>
                  lunes - viernes
                </p>
              </div>

              <div className={styles.schedule__card_buttons}>
                <p>
                  <i className="fa-solid fa-thumbs-up"></i>
                  50%
                </p>
                <p>
                  <i className="fa-solid fa-thumbs-down"></i>
                  50%
                </p>
              </div>

              <ButtonForm title="Ver perfil" />
            </div>
          </div>

          <div className={styles.schedule__content_selects}>
            <select name="" id="" className={styles.schedule__select}>
              <option value="">Elegir dia</option>
              {dataDays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select name="" id="" className={styles.schedule__select}>
              <option value="">Elegir hora</option>
              {dataHours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>

          <ButtonForm title="Agendar" />
        </div>
      </div>
    </div>
  );
};
