import s from "./MenPage.module.scss";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import atlantic2 from "../../img/atlantic2.jpg";
import atlantic3 from "../../img/atlantic3.jpg";
import atlantic4 from "../../img/atlantic4.jpg";
import { Reviews } from "./Reviews/Reviews";
import { MoreLike } from "./MoreLike/MoreLike";
import { Contact } from "./Contact/Contact";

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
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 14L12 8L6 14"
                      stroke="#343434"
                      stroke-linecap="round"
                    />
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

                <button className={` ${s.MenPage_toOrder_btn_icon}`}>
                  <svg
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
                </button>

                <button className={` ${s.MenPage_toOrder_btn_icon}`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18988 6.38C4.99988 6.38 4.79988 6.3 4.65988 6.16C4.36988 5.87 4.36988 5.39 4.65988 5.1L8.28988 1.47C8.57988 1.18 9.05988 1.18 9.34988 1.47C9.63988 1.76 9.63988 2.24 9.34988 2.53L5.71988 6.16C5.56988 6.3 5.37988 6.38 5.18988 6.38Z"
                      fill="#343434"
                    />
                    <path
                      d="M18.8101 6.38C18.6201 6.38 18.4301 6.31 18.2801 6.16L14.6501 2.53C14.3601 2.24 14.3601 1.76 14.6501 1.47C14.9401 1.18 15.4201 1.18 15.7101 1.47L19.3401 5.1C19.6301 5.39 19.6301 5.87 19.3401 6.16C19.2001 6.3 19.0001 6.38 18.8101 6.38Z"
                      fill="#343434"
                    />
                    <path
                      d="M20.21 10.6C20.14 10.6 20.07 10.6 20 10.6H19.77H4C3.3 10.61 2.5 10.61 1.92 10.03C1.46 9.58001 1.25 8.88001 1.25 7.85001C1.25 5.10001 3.26 5.10001 4.22 5.10001H19.78C20.74 5.10001 22.75 5.10001 22.75 7.85001C22.75 8.89001 22.54 9.58001 22.08 10.03C21.56 10.55 20.86 10.6 20.21 10.6ZM4.22 9.10001H20.01C20.46 9.11001 20.88 9.11001 21.02 8.97001C21.09 8.90001 21.24 8.66001 21.24 7.85001C21.24 6.72001 20.96 6.60001 19.77 6.60001H4.22C3.03 6.60001 2.75 6.72001 2.75 7.85001C2.75 8.66001 2.91 8.90001 2.97 8.97001C3.11 9.10001 3.54 9.10001 3.98 9.10001H4.22Z"
                      fill="#343434"
                    />
                    <path
                      d="M9.75977 18.3C9.34977 18.3 9.00977 17.96 9.00977 17.55V14C9.00977 13.59 9.34977 13.25 9.75977 13.25C10.1698 13.25 10.5098 13.59 10.5098 14V17.55C10.5098 17.97 10.1698 18.3 9.75977 18.3Z"
                      fill="#343434"
                    />
                    <path
                      d="M14.3604 18.3C13.9504 18.3 13.6104 17.96 13.6104 17.55V14C13.6104 13.59 13.9504 13.25 14.3604 13.25C14.7704 13.25 15.1104 13.59 15.1104 14V17.55C15.1104 17.97 14.7704 18.3 14.3604 18.3Z"
                      fill="#343434"
                    />
                    <path
                      d="M14.8898 22.75H8.85975C5.27975 22.75 4.47975 20.62 4.16975 18.77L2.75975 10.12C2.68975 9.71 2.96975 9.33 3.37975 9.26C3.78975 9.19 4.16975 9.47 4.23975 9.88L5.64975 18.52C5.93975 20.29 6.53975 21.25 8.85975 21.25H14.8898C17.4598 21.25 17.7498 20.35 18.0798 18.61L19.7598 9.86C19.8398 9.45 20.2298 9.18 20.6398 9.27C21.0498 9.35 21.3098 9.74 21.2298 10.15L19.5498 18.9C19.1598 20.93 18.5098 22.75 14.8898 22.75Z"
                      fill="#343434"
                    />
                  </svg>
                </button>
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
