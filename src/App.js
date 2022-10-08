import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tabela from './components/Tabela';
import TabelaFilter from './components/Tabelas/TabelaFilter';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/tabela_simples" element={<Tabela />} />
      </Routes>
      <Routes>
        <Route path="/tabela_filter" element={<TabelaFilter />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
