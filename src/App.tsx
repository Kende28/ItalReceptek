import { Fejlec } from "./components/Fejlec"
import { Recept } from "./components/Recept"


function App() {

  return (
    <>
    <Fejlec/>
    <Recept szemelyek="Kettő személyre:" cseszek={2}/>
    <Recept szemelyek="Egy összejövetelre:" cseszek={4}/>
    </>
  )
}

export default App
