import '../src/index.css';
import TodoList from './Pages/TodoList';
function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return <TodoList />;
}

export default App;
