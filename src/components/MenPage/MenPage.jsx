import s from "./MenPage.module.scss";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import atlantic2 from "../../img/atlantic2.jpg";
import atlantic3 from "../../img/atlantic3.jpg";
import atlantic4 from "../../img/atlantic4.jpg";
import { Reviews } from "../Reviews/Reviews";
import { MoreLike } from "../MoreLike/MoreLike";
import { Contact } from "../Contact/Contact";
import { ButtonIcons } from "../ButtonIcons/ButtonIcons";
import svgSprite from "../../img/sprite.svg";

function MenPage() {
  return (
    <main>
      <section className={s.MenPage}>
        <Container>
          <ul className={s.MenPage_list}>
            <li className={s.MenPage_item}>
              <Link className={s.MenPage_link} to="/">
                Головна
              </Link>
            </li>
            <li className={s.MenPage_item}>
              <Link className={s.MenPage_link} to="/">
                Чоловіки
              </Link>
            </li>
            <li className={s.MenPage_item}>
              <Link className={s.MenPage_link} to="/">
                Темобілизна
              </Link>
            </li>
            <li className={s.MenPage_item}>
              <Link className={s.MenPage_link} to="/">
                Atlancik
              </Link>
            </li>

            <li className={s.MenPage_item}>
              <Link className={s.MenPage_link} to="/">
                чоловічий термокостюм atlantic MW0MW32780
              </Link>
            </li>
          </ul>

          <div className={s.MenPage_box}>
            <div className={s.MenPage_box_img}>
              <img src={atlantic3} alt="термокостюм" />
              <div className={s.MenPage_box_img_wrapper}>
                <img
                  className={s.MenPage_img}
                  src={atlantic2}
                  alt="термокостюм"
                />
                <img
                  className={s.MenPage_img}
                  src={atlantic3}
                  alt="термокостюм"
                />
                <img
                  className={s.MenPage_img}
                  src={atlantic4}
                  alt="термокостюм"
                />
              </div>
            </div>

            <div className={s.MenPage_box_text}>
              <h2 className={s.MenPage_title}>
                чоловічий термокостюм atlantic
              </h2>
              <span className={s.MenPage_title_text}>термокостюм</span>
              <p className={s.MenPage_title_price}>
                3700 <span>грн.</span>
              </p>

              <p className={s.MenPage_text_size}>оберіть розмір</p>
              <ul className={s.MenPage_text_size_list}>
                <li className={s.MenPage_text_size_item}></li>
                <li className={s.MenPage_text_size_item}></li>
                <li className={s.MenPage_text_size_item}></li>
                <li className={s.MenPage_text_size_item}></li>
                <li className={s.MenPage_text_size_item}></li>
                <li
                  className={`${s.MenPage_text_size_item} ${s.MenPage_text__curren}`}
                ></li>
                <li className={s.MenPage_text_size_item}></li>
              </ul>

              <p className={s.MenPage_text_size}> оберіть колір</p>
              <ul className={s.MenPage_text_size_list}>
                <li
                  className={`${s.MenPage_text_color_item} ${s.MenPage_text__curren}`}
                >
                  <svg
                    className={s.MenPage_text_img_arrow_down}
                    width="24"
                    height="24"
                  >
                    <use href={svgSprite + "#arrow-down"}></use>
                  </svg>
                </li>
                <li
                  className={`${s.MenPage_text_color_item} ${s.MenPage_text_color__grey}`}
                ></li>
                <li
                  className={`${s.MenPage_text_color_item} ${s.MenPage_text_color__black}`}
                ></li>
              </ul>

              <div className={s.MenPage_info}>
                <h3 className={s.MenPage_title}>інформація про товар</h3>
                <p>
                  <b className={s.MenPage_info_b}>
                    Терморегуляція забезпечить вам тепло в будь-якій ситуації.
                  </b>{" "}
                  <br />
                  Сучасні технології дозволяють нашому термокостюму адаптуватися
                  до вашого тіла та навколишнього середовища.
                </p>

                <p>
                  <b className={s.MenPage_info_b}>
                    Легкість та еластичність для максимальної свободи рухів.
                  </b>
                  <br />
                  Забудьте про невигоди - наш термокостюм розроблений з
                  урахуванням вашої активності.
                </p>
                <p>
                  <b className={s.MenPage_info_b}>
                    Дихаючі тканини для оптимальної вентиляції.
                  </b>{" "}
                  <br />
                  Забудьте про потовиділення - наш термокостюм дозволяє шкірі
                  "дихати", забезпечуючи вам комфорт під час активної
                  діяльності.
                </p>
              </div>
              {/* ----------------------------TO ORDER--------------------- */}
              <div className={s.MenPage_toOrder}>
                <button className={`${s.MenPage_toOrder_btn} `}>
                  оформити замовлення
                </button>
                <button className={`${s.MenPage_toOrder_btn} `}>
                  купити у кредит
                </button>

                <ButtonIcons props={svgSprite + "#heart"} />

                <ButtonIcons props={svgSprite + "#bag"} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Reviews />
      <MoreLike />
      <Contact />
    </main>
  );
}

export { MenPage };
