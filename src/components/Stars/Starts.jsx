import s from "./Starts.module.scss";
import svgSprite from "../../img/sprite.svg";

function Stars() {
  return (
    <svg className={s.star} width="8" height="8">
      <use href={svgSprite + "#starblack"}></use>
    </svg>
  );
}

export { Stars };
