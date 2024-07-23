import {Card} from "../Card/Card.jsx";


export const Column = ({title}) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card name={'Web Design'} color={'_orange'}/>
        <Card name={'Research'} color={'_green'}/>
        <Card name={'Copywriting'} color={'_purple'}/>
        <Card name={'Web Design'} color={'_orange'}/>
      </div>
    </div>
  )
}
