import { Fejlec } from "./components/Fejlec"
import { Lablec } from "./components/Lablec"
import { Recept } from "./components/Recept"


function App() {

  return (
    <>
    <Fejlec/>
    <Recept szemelyek="Kettő személyre:" cseszek={2}/>
    <Recept szemelyek="Egy összejövetelre:" cseszek={4}/>
    <Lablec nev="Yamakawa Kende" datum={new Date("2025.10.02")} perc={120} mi={false} miHasznalat="semmire"/>
    </>
  )
}

export default App
