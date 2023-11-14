
import Navbar from './components/navbar/Navbar'
import './App.css'
import Jumbotroom from './components/jumbatroon/Jumbotroom'
import Footer from './components/footer/Footer'
// import ItemCount from './components/itemCount/ItemCount'




function App() {


  return (
    <>
      <Navbar />
      <Jumbotroom />
      {/* <ItemCount init={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/> */}
      <Footer />
      
    </>
  )
}

export default App
