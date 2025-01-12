import React, { useState } from 'react';
import './App.css';
import Music from './Music'; // Si decides agregar música de fondo nuevamente
import Confetti from 'react-confetti';


function App() {
  const [celebration, setCelebration] = useState(false); // Estado para controlar la animación de celebración

  const handleClick = () => {
    setCelebration(true); // Activar la animación de celebración
    setTimeout(() => setCelebration(false), 5000); // Desactivar la animación después de 5 segundos
  };

  return (
    <div className="app-container">
      <Music />
      <h1 className="greeting">¡Hola querida amiga!</h1>
      <div className="card-background">
        <p className="message">
          Quiero aprovechar este momento para agradecerte por ser una amiga increíble. Cada momento que hemos compartido me ha hecho valorar aún más nuestra amistad. ¡Eres muy especial para mí y me alegra tenerte en mi vida!
        </p>
      </div>
      <button className="cta-button" onClick={handleClick}>
        ¡Vamos a celebrar la amistad!
      </button>
      {celebration && (
        <div className="celebration-container">
          <Confetti numberOfPieces={200} gravity={0.3} /> {/* Confeti que cae al hacer clic */}
          <img
            src="https://img.icons8.com/emoji/48/000000/confetti-ball.png"
            alt="Guirnalda"
            className="celebration-image"
            style={{ animation: 'moveUp 5s infinite' }}
          />
          <img
            src="https://img.icons8.com/emoji/48/000000/party-popper.png"
            alt="Globo"
            className="celebration-image"
            style={{ animation: 'moveDown 5s infinite' }}
          />
        </div>
      )}
      <div className="signature">Con mucho cariño, Gregory el hacker</div>

    </div>
  );
}

export default App;
