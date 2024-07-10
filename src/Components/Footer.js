import React from "react";
import styled from "styled-components";


export default function Footer() {

    return (

        <FooterComponent>
            <p>COMPANY 2023 © ALL RIGHTS RESERVED</p>
            <span>KRTECHNOLOGY MARKETING LTDA - 31.768.098/0001-55</span>
        </FooterComponent>
    )
}

const FooterComponent = styled.div`
    margin-top: 100px;
    padding-bottom: 30px;

    p, span{
        text-align: center;
        color: rgba(255,255,255,0.7)
    }
`;