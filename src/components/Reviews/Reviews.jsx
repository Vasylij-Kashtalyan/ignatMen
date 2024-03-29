import s from "./Reviews.module.scss";
import { Container } from "../Container/Container";
import { ItemReviews } from "../ItemReviews/ItemReviews";
import svgSprite from "../../img/sprite.svg";

function Reviews() {
  return (
    <section className={s.Reviews}>
      <Container>
        <div className={s.Reviews_content}>
          <h3 className={s.Reviews_title}>Відгуки про товар </h3>

          <div className={s.Reviews_content_box}>
            <span>01</span>
            <span> / </span>
            <span>03</span>

            <button className={s.Reviews_content_btn}>
              <svg width="25" height="7">
                <use href={svgSprite + "#Arrow 2"}></use>
              </svg>
            </button>
            <button className={s.Reviews_content_btn}>
              <svg width="25" height="7">
                <use href={svgSprite + "#Arrow 1"}></use>
              </svg>
            </button>
          </div>
        </div>

        <ul className={s.Reviews_list}>
          <li className={`${s.Reviews_item__add} ${s.Reviews_item}`}>
            <p className={s.Reviews_item_icon_add}>
              <svg width="3" height="84">
                <use href={svgSprite + "#Line 14"}></use>
              </svg>
            </p>
            <svg width="84" height="3">
              <use href={svgSprite + "#Line 15"}></use>
            </svg>
          </li>
          <ItemReviews />
          <ItemReviews />
          <ItemReviews />
        </ul>
      </Container>
    </section>
  );
}

export { Reviews };
