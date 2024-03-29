import s from "./NavBarr.module.scss";
import { Container } from "../Container/Container";
import svgSprite from "../../img/sprite.svg";
import { ListMenu } from "../ListMenu/ListMenu";
import { ButtonIcons } from "../ButtonIcons/ButtonIcons";

function NavBarr() {
  return (
    <div className={s.NavBarr}>
      <Container>
        <div className={s.NavBarr_content}>
          <nav className={s.NavBarr_box}>
            <svg width="75" height="26">
              <use href={svgSprite + "#Logo"}></use>
            </svg>
            <ListMenu />
          </nav>

          <div className={s.NavBarr_wrapper}>
            <div className={s.NavBarr_wrapper_search}>
              <ButtonIcons width="22" props={svgSprite + "#search"} />
              <input className={s.NavBarr_inp} type="search" />
            </div>
            <ButtonIcons props={svgSprite + "#heart"} />
            <ButtonIcons props={svgSprite + "#bag"} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export { NavBarr };
