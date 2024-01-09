
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './page/home/Home'
import ItemListContainer from './components/item/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Disney from './page/disney/Disney'
import Marvel from './page/marvel/Marvel'
import StarWars from './page/StarWars/StarWars'
import Store from './page/store/Store'
import Cart from './components/cart/Cart'
import OurStory from './page/our-story/OurStory'
import Help from './page/help/Help'
import Work from './page/work/Work'




// import ItemCount from './components/itemCount/ItemCount'




function App() {


  return (
    <>

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Store' element={<Store/>} />
            <Route path='/disney' element={<Disney />} />
            <Route path='/marvel' element={<Marvel />} />
            <Route path='/starWars' element={<StarWars />} />
            <Route path='/ourStory' element={<OurStory />} />
            <Route path='/work' element={<Work />} />
            <Route path='/help' element={<Help/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
