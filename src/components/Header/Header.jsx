import {useState} from "react";
import PopUser from "../Popups/PopUser/PopUser";
import * as S from "./Header.styled.js"
import {Container} from "../Shared.styled.js";


const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const manualOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight>
            <a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderLinkNewCard className="header__btn-main-new _hover01">
              Создать новую задачу
            </S.HeaderLinkNewCard>
            <S.HeaderUser className="_hover02" onClick={manualOpen}>Ivan Ivanov</S.HeaderUser>
            {isOpen && (<PopUser />)}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  )
}

export default Header
