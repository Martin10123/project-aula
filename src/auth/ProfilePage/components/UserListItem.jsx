import styles from "../page/profile.module.css";

export const UserListItem = ({ info, iconStyle }) => {
  return (
    <div className={styles.user__item}>
      <i className={iconStyle}></i>
      <p>{info}</p>
    </div>
  );
};
