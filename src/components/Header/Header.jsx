import {useState} from "react";


export const Header = ({addCard}) => {
  const [isOpenModalUser,setisOpenModalUser] = useState(false)

  function openModal(e) {
    e.preventDefault()
    setisOpenModalUser(prev => !prev)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="../public/image/logo.png" alt="logo"/></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="../public/image/logo_dark.png" alt="logo"/></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard" onClick={addCard}>Создать новую задачу</a></button>
            <a href="#user-set-target" className="header__user _hover02" onClick={openModal}>Ivan Ivanov</a>
            {isOpenModalUser && (
              <div className="header__pop-user-set pop-user-set" id="user-set-target">
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__topic">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox"/>
              </div>
              <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
            </div>
            )}

          </nav>
        </div>
      </div>
    </header>
  )
}
