import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';
import MenuHamburger from './Hamburguer';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    const mobileBreakpoint = 768; 
    setIsMobile(window.innerWidth <= mobileBreakpoint);
  };

  useEffect(() => {
    checkIfMobile(); 
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="w-full bg-slate-50 ring ring-slate-300 shadow-sm flex flex-row relative">
      {!isMobile ? (
        <>
          <MenuButton titulo={"primeiro"}>
            <button>Teste de primeiro botao</button>
            <p>Teste de primeiro botao</p>
            <p>Teste de primeiro botao</p>
          </MenuButton>

          <MenuButton titulo={"Segundo Botão"}>
            <p>primeiro botao</p>
            <p>primeiro botao</p>
            <p>primeiro botao</p>
          </MenuButton>

          <MenuButton titulo={"Terceirozinho"}>
            <p>terc botao</p>
            <p>terc botao</p>
            <p>terc botao</p>
          </MenuButton>

          <MenuButton titulo={"Quarto"}>
            <p>quarto botão a ser botao</p>
            <p>terc botao</p>
            <p>Teste de primeiro botao</p>
          </MenuButton>
        </>
      ) : (
        <>
            <div className='flex justify-end w-full'> 
              <MenuHamburger>a</MenuHamburger>
</div>
        </>
      )}
    </div>
  );
};

export default Menu;