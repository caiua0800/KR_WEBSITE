import React from "react";
import styled from 'styled-components';

export default function Container({ children }) {

    return (
        <ContainerComponent>
            { children }
        </ContainerComponent>
    )
}

const ContainerComponent = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to right, #00111c, #001a2c);
    box-sizing: border-box;
    overflow: auto;
    position: relative;
`;