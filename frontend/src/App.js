import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import List from './views/list/list';
import PlayerState from './views/player/player';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/:id" element={<PlayerState />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
