import './App.css';
import React from 'react';
import Container from './Components/Container';
import styled from 'styled-components';
import Header from './Components/Header';
import Body from './Components/Body';
import Formulario from './Components/Formulario';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Body />
        <Formulario />

        <Footer />
      </Container>
    </div>
  );
}

const WhatsappIcon = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  align-items: end;
  z-index: -1;
  img{
    width: 50px;
    padding-right: 30px;
    padding-bottom: 30px;
    cursor: pointer;
    transition: .3s;

    &:hover{
      transform: scale(1.1);
    }
  }
`;

export default App;
