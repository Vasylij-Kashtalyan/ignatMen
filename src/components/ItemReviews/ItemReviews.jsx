import s from "./ItemReviews.module.scss";
import svgSprite from "../../img/sprite.svg";
import { Stars } from "../Stars/Starts";
import mask from "../../img/Mask.jpg";

function ItemReviews() {
  return (
    <li className={s.item}>
      <img className={s.item_mask} src={mask} alt="" />
      <p>
        <Stars />

        <Stars />
        <Stars />
        <Stars />
        <svg className={s.item_star} width="8" height="8">
          <use href={svgSprite + "#star"}></use>
        </svg>
        <h4>Жора Ремінгтон</h4>
      </p>

      <p className={s.item_text}>
        Дуже задоволений якістю обслуговування і самою продукцією. Купували
        термобілизну у подарунок, друзі...
      </p>
    </li>
  );
}

export { ItemReviews };
