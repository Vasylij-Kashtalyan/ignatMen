import s from "./MoreLike.module.scss";
import { Container } from "../../Container/Container";
import atlanBig1 from "../../../img/atlanBig1.jpg";
import atlanBig2 from "../../../img/atlanBig2.jpg";
import atlanBig3 from "../../../img/atlanBig3.jpg";

function MoreLike() {
  return (
    <section className={s.MoreLike}>
      <Container>
        <h3 className={s.MoreLike_title}>Ще може сподобатись</h3>

        <ul className={s.MoreLike_list}>
          <li className={s.MoreLike_item}>
            <svg
              className={s.MoreLike_item_heart}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.69001C1.25 5.19001 4.08 2.35001 7.56 2.35001C9.25 2.35001 10.83 3.01001 12 4.19001C13.17 3.01001 14.75 2.35001 16.44 2.35001C19.92 2.35001 22.75 5.20001 22.75 8.69001C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.85001C4.91 3.85001 2.75 6.02001 2.75 8.69001C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.69001C21.26 6.02001 19.1 3.85001 16.45 3.85001C14.93 3.85001 13.52 4.56001 12.61 5.79001C12.33 6.17001 11.69 6.17001 11.41 5.79001C10.48 4.55001 9.08 3.85001 7.56 3.85001Z"
                fill="#343434"
              />
            </svg>
            <img src={atlanBig1} alt="Термобілизна" />

            <h4 className={s.MoreLike_item_title}>
              Термобілизна для бодібілдерів
            </h4>
            <p className={s.MoreLike_item_text}>
              Для чоловіків <br /> 2 кольори
            </p>
            <p className={s.MoreLike_item_price}>
              4000 <span> грн.</span>
            </p>
          </li>
          <li className={s.MoreLike_item}>
            <svg
              className={s.MoreLike_item_heart}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.69001C1.25 5.19001 4.08 2.35001 7.56 2.35001C9.25 2.35001 10.83 3.01001 12 4.19001C13.17 3.01001 14.75 2.35001 16.44 2.35001C19.92 2.35001 22.75 5.20001 22.75 8.69001C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.85001C4.91 3.85001 2.75 6.02001 2.75 8.69001C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.69001C21.26 6.02001 19.1 3.85001 16.45 3.85001C14.93 3.85001 13.52 4.56001 12.61 5.79001C12.33 6.17001 11.69 6.17001 11.41 5.79001C10.48 4.55001 9.08 3.85001 7.56 3.85001Z"
                fill="#343434"
              />
            </svg>
            <img src={atlanBig2} alt="Термобілизна" />
            <h4 className={s.MoreLike_item_title}>
              Термобілизна для бодібілдерів
            </h4>
            <p className={s.MoreLike_item_text}>
              Для чоловіків <br /> 2 кольори
            </p>

            <p className={s.MoreLike_item_price}>
              4000<span> грн.</span>
            </p>
          </li>
          <li className={s.MoreLike_item}>
            <svg
              className={s.MoreLike_item_heart}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.69001C1.25 5.19001 4.08 2.35001 7.56 2.35001C9.25 2.35001 10.83 3.01001 12 4.19001C13.17 3.01001 14.75 2.35001 16.44 2.35001C19.92 2.35001 22.75 5.20001 22.75 8.69001C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.85001C4.91 3.85001 2.75 6.02001 2.75 8.69001C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.69001C21.26 6.02001 19.1 3.85001 16.45 3.85001C14.93 3.85001 13.52 4.56001 12.61 5.79001C12.33 6.17001 11.69 6.17001 11.41 5.79001C10.48 4.55001 9.08 3.85001 7.56 3.85001Z"
                fill="#343434"
              />
            </svg>
            <img src={atlanBig3} alt="Термобілизна" />
            <h4 className={s.MoreLike_item_title}>
              Термобілизна для бодібілдерів
            </h4>
            <p className={s.MoreLike_item_text}>
              Для чоловіків <br /> 2 кольори
            </p>

            <p className={s.MoreLike_item_price}>
              4000 <span> грн.</span>
            </p>
          </li>
        </ul>
        <div className={s.MoreLike_box_btn}>
          <div>
            <button className={s.MoreLike_btn}>дивитись більше</button>
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L12 18L17 13"
              stroke="#343434"
              stroke-linecap="round"
            />
            <path d="M7 7L12 12L17 7" stroke="#343434" stroke-linecap="round" />
          </svg>
        </div>
      </Container>
    </section>
  );
}

export { MoreLike };
