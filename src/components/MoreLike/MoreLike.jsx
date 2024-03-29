import s from "./MoreLike.module.scss";
import { Container } from "../Container/Container";
import atlanBig1 from "../../img/atlanBig1.jpg";
import atlanBig2 from "../../img/atlanBig2.jpg";
import atlanBig3 from "../../img/atlanBig3.jpg";
import svgSprite from "../../img/sprite.svg";
import { MoreLikeItem } from "../MoreLikeItem/MoreLikeItem";

function MoreLike() {
  return (
    <section className={s.MoreLike}>
      <Container>
        <h3 className={s.MoreLike_title}>Ще може сподобатись</h3>

        <ul className={s.MoreLike_list}>
          <MoreLikeItem img={atlanBig1} />
          <MoreLikeItem img={atlanBig2} />
          <MoreLikeItem img={atlanBig3} />
        </ul>

        <div className={s.MoreLike_box_btn}>
          <div>
            <button className={s.MoreLike_btn}>дивитись більше</button>
          </div>

          <svg width="24" height="24">
            <use href={svgSprite + "#chevrons-down"}></use>
          </svg>
        </div>
      </Container>
    </section>
  );
}

export { MoreLike };
