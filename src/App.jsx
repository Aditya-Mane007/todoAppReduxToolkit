import ButtonSection from "./components/ButtonSection"
import Header from "./components/Header"
import AddTodoModal from "./components/Modal/AddTodoModal"
import UpdateTodoModal from "./components/Modal/UpdateTodoModal"
import TodoSection from "./components/TodoSection"



function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <AddTodoModal />
        <UpdateTodoModal />
        <Header />
        <ButtonSection />
        <TodoSection />
      </div>
    </div>
  )
}

export default App
