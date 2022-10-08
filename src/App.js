import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tabela from './components/Tabela';

import './App.css';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tabela />} />
            </Routes>            
        </BrowserRouter>

    )  
}

export default App;
