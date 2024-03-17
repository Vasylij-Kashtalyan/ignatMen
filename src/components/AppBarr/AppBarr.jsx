import s from "./AppBarr.module.scss";
import { Container } from "../Container/Container";
import { NavBarr } from "./NavBarr/NavBarr";

function AppBar() {
  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.header_content}>
            <div className={s.header_first}>
              <div className={s.header_box}>
                <span>098 900 09 09</span>
                <span className={s.header_box_help}>Допомога</span>
              </div>

              <div className={s.header_signIn}>
                <button className={s.header_signIn_btn}>Увійти</button>
                <span>/</span>
                <button className={s.header_signIn_btn}>Зареєструватися</button>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <NavBarr />
    </>
  );
}

export { AppBar };
