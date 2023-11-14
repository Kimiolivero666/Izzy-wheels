
import './App.css'
import Layout from './components/Layout'
import Home from './page/home/Home'


// import ItemCount from './components/itemCount/ItemCount'




function App() {


  return (
    <>
      
      <Layout>
      {/* <ItemCount init={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/> */}
      <Home />
      </Layout>
    </>
  )
}

export default App
