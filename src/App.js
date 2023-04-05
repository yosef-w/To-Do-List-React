import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ToDo from './views/ToDo';
import ToDoForm from './components/ToDoForm';
import PokemonDisplay from './views/PokemonDisplay';

export default function App() {
    let name = 'Yosef';

    return (
        <div className="App">
            <Navbar username={name}/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ToDo />} />
                        <Route path='/pokemon' element={<PokemonDisplay />} />
                    </Routes>
                </div>
        </div>
    );
}
