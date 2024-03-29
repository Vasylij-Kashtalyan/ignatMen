import s from "./ListMenu.module.scss";
import { Link } from "react-router-dom";

function ListMenu() {
  return (
    <ul className={s.list}>
      <li className={s.list_item}>
        <Link className={s.list_link} to="/">
          новинки
        </Link>
      </li>

      <li className={`${s.list_item} ${s.list_current}`}>
        <Link className={s.list_link} to="/">
          чоловіки
        </Link>
      </li>
      <li className={s.list_item}>
        <Link className={s.list_link} to="/">
          жінки
        </Link>
      </li>
      <li className={s.list_item}>
        <Link className={s.list_link} to="/">
          аксесуари
        </Link>
      </li>
      <li className={s.list_item}>
        <Link className={s.list_link} to="/">
          акції
        </Link>
      </li>
    </ul>
  );
}

export { ListMenu };
