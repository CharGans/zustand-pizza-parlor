import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Routes>
          {/* <Route path='/' element={<orders />}/> */}
          {/* <Route path='/orders' element={Orders}></> */}
          {/* <Route path='/cart' element={<cart />}/> */}
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
