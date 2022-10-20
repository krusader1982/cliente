import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tabela from './components/Tabela';
import TabelaFilter from './components/Tabelas/TabelaFilter';
import Home from './components/Home/Home';

import './App.css';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <div className='container'>
      <header>
        <div>Home</div>
        <div>Login</div>
      </header>
      <aside> 
        <ul>
          <li>Alunos</li>
          <li>Cadastrar Alunos</li>
          <li>Configurações</li>
        </ul>
      </aside>
      <main>
      
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
        <Routes>
          <Route path="/pagination" element={<Pagination />} />
        </Routes>      
      </BrowserRouter>
      </main>
      <footer>
        <div>Vamos ver o que acontece por aqui!!</div>
      </footer>
    </div>


  )
}

export default App;
