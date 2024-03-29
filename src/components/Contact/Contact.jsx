import s from "./Contact.module.scss";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <footer className={s.Contact}>
        <Container>
          <div className={s.Contact_content}>
            <div className={s.Contact_center}>
              <h5 className={s.Contact_title}>Контакт - центр</h5>
              <ul>
                <li className={s.Contact_item}>098 900 09 09 </li>
                <li className={s.Contact_item}>Пн - Пт 09:00 - 21:00</li>
                <li className={s.Contact_item}>Пн - Пт 09:00 - 21:00</li>
              </ul>
            </div>

            <div className={s.Contact_center}>
              <h5 className={s.Contact_title}>Покупцям</h5>
              <ul>
                <li className={s.Contact_item}>Оплата і доставка </li>
                <li className={s.Contact_item}>Повернення</li>
                <li className={s.Contact_item}>Питання та відповіді</li>
              </ul>
            </div>
            <div className={s.Contact_center}>
              <h5 className={s.Contact_title}>Особистий кабінет</h5>
              <ul>
                <li className={s.Contact_item}>Мої дані </li>
                <li className={s.Contact_item}>Історія замовлень</li>
                <li className={s.Contact_item}>Улюблені</li>
                <li className={s.Contact_item}>Розсилки</li>
              </ul>
            </div>
            <div className={s.Contact_center}>
              <h5 className={s.Contact_title}>Про компанію</h5>
              <ul>
                <li className={s.Contact_item}>Про нас</li>
                <li className={s.Contact_item}>Новини</li>
                <li className={s.Contact_item}>Стати партнером</li>
                <li className={s.Contact_item}>Угода користувача</li>
              </ul>
            </div>
          </div>

          <div></div>
        </Container>
      </footer>

      <footer className={`${s.Contact} ${s.Contact_bottom}`}>
        <Container>
          <div className={s.Contact_bottom_content}>
            <ul className={s.Contact_list}>
              <li className={s.Contact_bottom_item}>
                <Link className={s.Contact_link} to="/">
                  новинки
                </Link>
              </li>

              <li className={s.Contact_bottom_item}>
                <Link className={s.Contact_link} to="/">
                  чоловіки
                </Link>
              </li>
              <li className={s.Contact_bottom_item}>
                <Link className={s.Contact_link} to="/">
                  жінки
                </Link>
              </li>
              <li className={s.Contact_bottom_item}>
                <Link className={s.Contact_link} to="/">
                  аксесуари
                </Link>
              </li>
              <li className={s.Contact_bottom_item}>
                <Link className={s.Contact_link} to="/">
                  акції
                </Link>
              </li>
            </ul>
            <p className={s.Contact_bottom_text}>
              © 2022 — 2023 IGNAT. Усі права захищені.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export { Contact };
