import s from "./MoreLikeItem.module.scss";
import svgSprite from "../../img/sprite.svg";

function MoreLikeItem(props) {
  return (
    <li className={s.item}>
      <svg className={s.item_heart} width="24" height="24">
        <use href={svgSprite + "#heart"}></use>
      </svg>
      <img src={props.img} alt="Термобілизна" />

      <h4 className={s.item_title}>Термобілизна для бодібілдерів</h4>
      <p className={s.item_text}>
        Для чоловіків <br /> 2 кольори
      </p>
      <p className={s.item_price}>
        4000 <span> грн.</span>
      </p>
    </li>
  );
}

export { MoreLikeItem };
