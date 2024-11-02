import './App.css'
import ItemListContainer from './components/ItemListContainer'

import NavBar from './components/NavBar'
import ProductSlider from './components/ProductSlider';

import largeImage1 from './assets/images/dragonball.jpg'
import smallImage1 from './assets/images/horizon.jpg'
import smallImage2 from './assets/images/silent.jpg'

const products = [
  {
    largeImage: largeImage1,
    smallImage1: smallImage1,
    smallImage2: smallImage2,
    name: 'Product 1',
  },
  {
    largeImage: 'url_large2',
    smallImage1: 'url_small2_1',
    smallImage2: 'url_small2_2',
    name: 'Product 2',
  },
  
];


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <ProductSlider products={products} />
      <ItemListContainer greeting="Welcome to Nuuvem" />
    </div>
  )
}

export default App
