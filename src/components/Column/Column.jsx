import Card from "../Card/Card.jsx";
import {CardsColumn, ColumnParagraph, ColumnTitle, MainColumn} from "./Column.styled";


const Column = ({title, cardList}) => {
  return (<MainColumn>
      <ColumnTitle>
        <ColumnParagraph>{title}</ColumnParagraph>
      </ColumnTitle>
      <CardsColumn>
        {cardList.map(({ id, topic, title, date }) => (
          <Card key={id}
                cardId={id}
                topic={topic}
                title={title}
                date={date}
          />
        ))}
      </CardsColumn>
    </MainColumn>
  )
}

export default Column
