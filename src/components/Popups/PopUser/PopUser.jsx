import * as S from "./PopUser.styled";


const PopUser = () => {
  return (
    <S.HeaderPopUser id={"pop-user"}>
      <S.PopUserName>Ivan Ivanov</S.PopUserName>
      <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
      <S.PopUserSetTheme>
        <S.PopUserTheme>Светлая тема</S.PopUserTheme>
        <S.PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.PopUserButton>Выйти</S.PopUserButton>
    </S.HeaderPopUser>
  )
}

export default PopUser
