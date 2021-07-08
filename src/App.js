import { BrowserRouter, Switch } from 'react-router-dom';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Home />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
