
import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemLisContainer/ItemListContainer'
import Counter from './components/Counter/Counter'
function App() {


  
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"bienvenidos a mi tienda"} />
      <ItemListContainer saludo={"ya terminamos"} />
      <Counter/>
    </div>
  )
}

export default App
