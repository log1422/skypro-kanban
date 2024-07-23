import {useState} from "react";
import Calendar from "../../Calendar/Calendar.jsx";
import {
  BtnFormNewCreate,
  Categorie,
  Categories,
  CategoriesTheme, CloseNewTask, ColorLabelInTasks, LabelNewTask,
  PopNewCardBlock,
  PopNewCardCommon,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardFormBlock,
  PopNewCardFormNew,
  PopNewCardTitle,
  PopNewCardWrap, RadioInput, TextArea, TextAreaInput, WrapperRadio
} from "./PopNewCard.styled.js";


const PopNewCard = () => {
  const [date, setDate] = useState(new Date())
  const [topic, setTopic] = useState("Research")
  return (
    <PopNewCardCommon>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle className="pop-new-card__ttl">Создание задачи</PopNewCardTitle>
            <CloseNewTask to={"/"}> &#10006; </CloseNewTask>
            <PopNewCardWrap>
              <PopNewCardFormNew>
                <PopNewCardFormBlock>
                  <LabelNewTask htmlFor="formTitle" className="subttl">Название задачи</LabelNewTask>
                  <TextAreaInput className="form-new__input8" type="text"
                                 name="title" id="formTitle"
                                 placeholder="Введите название задачи..." autoFocus/>
                </PopNewCardFormBlock>
                <PopNewCardFormBlock>
                  <LabelNewTask htmlFor="textArea" className="subttl">Описание задачи</LabelNewTask>
                  <TextArea className="form-new__area7" name="description"
                            id="textArea"
                            placeholder="Введите описание задачи..."></TextArea>
                </PopNewCardFormBlock>
              </PopNewCardFormNew>
              <Calendar date={date} setDate={setDate} />
            </PopNewCardWrap>
            <Categories>
              <Categorie>Категория</Categorie>
              <CategoriesTheme>
                <WrapperRadio $isActive={topic === 'Web Design'}
                              className="categories__theme5 _orange _active-category9">
                  <ColorLabelInTasks htmlFor="radio1" $color={"orange"}>Web Design</ColorLabelInTasks>
                  <RadioInput className="_orange"
                              type="radio" name="try" id="radio1" value={"Web Design"}/>
                </WrapperRadio>
                <WrapperRadio $isActive={topic === 'Research'} className="categories__theme5 _green">
                  <ColorLabelInTasks htmlFor="radio2" $color={"green"}>Research</ColorLabelInTasks>
                  <RadioInput className="_green"
                              type="radio" name="try" id="radio2" value={"Research"}/>
                </WrapperRadio>
                <WrapperRadio $isActive={topic === 'Copywriting'} className="categories__theme5 _purple">
                  <ColorLabelInTasks htmlFor="radio3" $color={"purple"}>Copywriting</ColorLabelInTasks>
                  <RadioInput className="_purple"
                              type="radio" name="try" id="radio3" value={"Copywriting"}/>
                </WrapperRadio>
              </CategoriesTheme>
            </Categories>
            <BtnFormNewCreate>Создать задачу</BtnFormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardCommon>
  )
}

export default PopNewCard
