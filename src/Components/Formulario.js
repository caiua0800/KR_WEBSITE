import React, { useState } from "react";
import styled from "styled-components";


export default function Formulario() {

    const [phone, setPhone] = useState('+55 ');

    const formatPhone = (value) => {
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
        return value;
    };

    const handlePhoneChange = (event) => {
        let value = event.target.value.replace('+55 ', '');
        if (value.length <= 14) {
            value = formatPhone(value);
            setPhone('+55 ' + value);
        }
    };

    const handlePhoneFocus = () => {
        if (phone === '') {
            setPhone('+55 ');
        }
    };


    return (
        <FormularioComponent>
            <h1>PREENCHA O FORMULÁRIO</h1>

            <FormData>
                <FormGroup>
                    <span>DIGITE SEU NOME</span>
                    <input type="text" placeholder="..."  />
                </FormGroup>
                <FormGroup>
                    <span>DIGITE O NOME DE SUA EMPRESA (SE HOUVER)</span>
                    <input type="text" placeholder="..." />
                </FormGroup>
                <FormGroup>
                    <span>DIGITE SEU NÚMERO</span>
                    <input type="text"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onFocus={handlePhoneFocus}
                                    maxLength="19"  />
                </FormGroup>
                <FormGroup>
                    <span>QUANTO ESTÁ DISPOSTO A INVESTIR NESSE PROJETO?</span>
                    <select>
                        <option>R$15.000,00</option>
                        <option>De R$15.000 até R$20.000</option>
                        <option>De R$20.000 até R$50.000</option>
                        <option>De R$50.000 até R$100.000</option>
                        <option>Mais de R$100.000</option>
                    </select>
                </FormGroup>

                <FormGroup>
                    <span>QUAL O MOTIVO DO SEU CONTATO</span>
                    <select>
                        <option>MAIS INFORMAÇÕES</option>
                        <option>REUNIÃO ONLINE</option>
                        <option>CONSULTORIA</option>
                        <option>CONTRATAÇÃO</option>
                    </select>
                </FormGroup>

                <button>ENVIAR SOLICITAÇÃO</button>
            </FormData>
        </FormularioComponent>
    )
}

const FormularioComponent = styled.div`
    width: 100%;
    margin-top: 30px;
    box-sizing: border-box;
    text-align: center;
    h1{
        margin: 0;
    }

    @media (max-width: 800px){
        margin-top: 60px;

        h1{
            font-weight: 600;
            font-size: 26px;
        }
    }
`;

const FormData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-top: 50px;
    padding: 0 40px;


    button{
        width: 100%;
        height: 40px;
        border: 2px solid white;
        color: white;
        font-size: 18px;
        cursor: pointer;
        background: linear-gradient(to right, #000814, #003566);
        transition: .3s;

        &:hover{
            transform: scale(1.02);
        }
    }

    @media (max-width: 800px){
        gap: 25px;
        margin-top: 20px;
        padding: 0 10px;
    }
`;

const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 5px;
    align-items: start;
    justify-content: center;

    span{
        font-size: 18px;
    }

    input{
        width: 100%;
        height: 35px;
        border-radius: 8px;
        border: 0;
        padding-left: 30px;
        font-size: 18px;
        color: rgba(0,0,0,1);
        box-sizing: border-box;
        font-weight: 600;
    }

    select{
        width: 100%;
        height: 35px;
        border-radius: 8px;
        border: 0;
        padding-left: 30px;
        font-size: 18px;
        color: rgba(0,0,0,0.8);
        box-sizing: border-box;
        font-weight: 600;
    }

    @media (max-width: 800px){
        span{
            font-size: 14px;
        }

        input{
            width: 100%;
            height: 30px;
            border-radius: 3px;
            font-size: 16px;
        }

        select{
                width: 100%;
            height: 30px;
            border-radius: 3px;
            font-size: 16px;
        }
    }
`;