import React from 'react';
import './App.css'; // Estilos opcionales
import Tarjeta from './Tarjeta';
import { ContadorApp } from './ContadorApp';
import ColorGenerator from './ColorDeFondo';
import EmojiGenerator from './Emojis';
import Adivinanza from './Adivinanza';

const App = () => {
  return (
    <div className="App">
      <h1 className='Tarjeta'>Presentación</h1>
      <Tarjeta 
        firstName="Nombre: Luciano"
        lastName="Perez Turbay"
        profession="Analista tecnico y Estudiante"
        description="Data: analisis de mercados financieros y estudiante de desarrollo de software"
      
      />
    <ContadorApp  />
    <ColorGenerator />
    <EmojiGenerator />
    <Adivinanza/>

    </div>
  );
};

export default App;