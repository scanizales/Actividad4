import Header from "../components/Header"
import AddTask from "../components/AddTask"
import ShowTaks from "../components/ShowTaks"
import { createContext, useState } from "react"


export const ChangeComponent = createContext()
function App() {
  
  const  [listState, setListState] = useState([{tittle: '', text: ''}])
  const [showComponent, setShowComponent] = useState()

  return (
    <>
      <ChangeComponent.Provider value={{setShowComponent}}>
      <Header></Header>
      </ChangeComponent.Provider>
      
     {showComponent !== undefined?(showComponent?<AddTask list = {listState}setListState={setListState }/>: <ShowTaks list = {listState}/>):null}
    </>
  )
}

export default App
