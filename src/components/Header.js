import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundImage: "url('https://example.com/your-background-image.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '3rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        Dustin Perry
      </h1>
    </header>
  );
}

export default Header;
