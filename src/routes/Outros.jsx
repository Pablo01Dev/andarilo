import React from 'react';
import { Link } from 'react-router-dom';

function Outros() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '13em' }}>
      <h1 style={{ margin: '2em', textAlign: 'center' }}>Página sendo atualizada</h1>
      <Link to="/">
        <button style={{ marginTop: '1em' }}>Voltar</button>
      </Link>
    </div>
  );
}

export default Outros;
