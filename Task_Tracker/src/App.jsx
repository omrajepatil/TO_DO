import Heading from './component/Heading'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Task from './component/Task';

function App() {
  // const [count, setCount] = useState(0)

  const items = [
    {
      name:"writing",
      dueDate:"4/12/2021"
    },
    {
      name:"Reading",
      dueDate:"9/2/2021"
    }
  ]

  return (
    <>
      <Heading />
      <Task items={items} />
     
    </>
  )
}

export default App
