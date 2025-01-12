import React, { useEffect } from 'react';

function Music() {
  useEffect(() => {
    const audio = new Audio('ruta-a-tu-musica.mp3'); // Cambia esto a tu archivo de música
    audio.loop = true;
    audio.play();
    return () => audio.pause();
  }, []);

  return null;
}

export default Music;
