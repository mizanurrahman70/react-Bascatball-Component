import BasketBallCard from "./components/BasketBallCard"


function App() {
  

  return (
    <>
   <BasketBallCard
      name="LeBron James"
      image="https://i.ibb.co/L9FJHH6/dclassic-2022-11-29-172401-783.jpg"
      position="Forward"
      stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
    />

    </>
  )
}

export default App
