import s from "./ButtonIcons.module.scss";

function ButtonIcons({ props }) {
  return (
    <button className={s.btn_icon}>
      <svg width="24" height="24">
        <use href={props}></use>
      </svg>
    </button>
  );
}

export { ButtonIcons };
