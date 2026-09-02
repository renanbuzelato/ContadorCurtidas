import { useState, useEffect } from 'react';

function ContadorCurtidas() {

  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    if (curtidas >= 5) {
      console.log('Curtidas em alta!');
    }
  }, [curtidas]);

  const incrementarCurtidas = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Contador de Curtidas</h2>
      
      <p>Curtidas: <strong>{curtidas}</strong></p>

      <button onClick={incrementarCurtidas}>
        Curtir
      </button>

      {curtidas >= 5 && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Curtidas em alta!
        </p>
      )}
    </div>
  );
}

export default ContadorCurtidas;