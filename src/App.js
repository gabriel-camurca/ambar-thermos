import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store';
import Home from './components/Home';
import DisplayInfo from './components/DisplayInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/city' element={<DisplayInfo />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
