import {useEffect, useState} from "react";
import "./App.css";
import {GlobalStyle} from "./Global.styled";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse.jsx";
import {tasks} from "./data.js";


function App() {
  const [cards, setCards] = useState(tasks)
  const [isLoading, setIsLoading] = useState(false)

  const addCard = (e) => {
    e.preventDefault()
    const newCard = {
      id: cards[cards.length - 1].id + 10,
      date: '20.02.2023',
      topic: "Research",
      title: "Название задачи1",
      status: "Без статуса",
    }

    setCards([...cards, newCard])
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
          setIsLoading(false)
      }, 1000)
  }, [])

  return (
    <div className="wrapper">
      <GlobalStyle/>
      <PopNewCard/>
      <PopBrowse/>
      <Header addCard={addCard}/>
      <Main isLoading={isLoading} cards={cards}/>
    </div>
  )
}

export default App
