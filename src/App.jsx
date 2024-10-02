import ButtonSection from "./components/ButtonSection";
import Header from "./components/Header";
import AddTodoModal from "./components/Modal/AddTodoModal";
import TodoSection from "./components/TodoSection";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <AddTodoModal />
        <Header />
        <ButtonSection />
        <TodoSection />
      </div>
    </div>
  );
}

export default App;
