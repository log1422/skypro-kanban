import Column from "../Column/Column.jsx";
import {useEffect, useState} from "react";
import Loader from "../Loader/Loader";
import {MainBlock, MainContent, MainStyleTotal} from "./Main.styled"
import {Container} from "../Shared.styled.js";


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({cards, errorMesg}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);

  return (
    <MainStyleTotal>
      <Container>
        <MainBlock>
          <MainContent>
            {errorMesg ? <p>{errorMesg}</p> :(
              isLoading
                ? <Loader/>
                : statusList.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cardList={cards.filter(card => card.status === status)}
                  />
                ))
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainStyleTotal>
  )
}

export default Main
