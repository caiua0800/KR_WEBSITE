import React from "react";
import styled from "styled-components";


export default function Body() {
    return (
        <BodyComponent>
            <h1>TECNOLOGIA DE TOKENIZAÇÃO DE ECOSSISTEMAS FINANCEIROS</h1>

            <p>
                A tecnologia de desenvolvimento de ecossistemas econômicos baseada na tokenização de ativos financeiros, antecipação de recebíveis e créditos de carbono, integrada com gateways de venda e aplicativos Android e iOS, representa uma inovação significativa no mercado. Este sistema permite a digitalização e a comercialização de ativos através de tokens, facilitando a liquidez e a antecipação de valores a receber. Os gateways de venda garantem transações seguras e eficientes, enquanto os aplicativos móveis proporcionam acessibilidade e conveniência, permitindo que usuários gerenciem seu ativos diretamente de seus dispositivos, tudo 100% White Label.
            </p>

            <div>
                <h5>QUER SABER MAIS INFORMAÇÕES?</h5>
                <button className="ligarBtn">+55 (51) 99829-2983</button>
                <button className="whatsappBtn">
                    <img src="https://firebasestorage.googleapis.com/v0/b/wldata.appspot.com/o/whatsapp-color-svgrepo-com%20(1).png?alt=media&token=af14d940-dc5d-46e3-8d4a-37790505696a"/>
                    <span>
                        WHATSAPP
                    </span>
                </button>
            </div>
        </BodyComponent>
    )
}

const BodyComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    padding: 30px 40px;
    box-sizing: border-box;


    h1{
      font-weight: 100;
      color: orange;
      text-align: center;
    }
  
    p{
      text-align: justify;
      font-size: 22px;
    }

    div{
        margin-top: 20px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        h5{
            margin: 0;
            font-weight: 100;
            font-size: 32px;
            text-align: center;
        }

        .ligarBtn{
            width: 600px;
            height: 40px;
            transition: .3s;
            background: linear-gradient(to right, #001d3d, #00509d, #001d3d);
            border:0;
            font-size: 20px;
            font-weight: 600;
            cursor: pointer;
            color: white;
            &:hover{
                transform: scale(1.05);
            }
        }

        .whatsappBtn{
            width: 600px;
            height: 40px;
            transition: .3s;
            background: linear-gradient(to right, #007f5f, #bfd200, #007f5f);
            border:0;
            font-size: 20px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            &:hover{
                transform: scale(1.05);
            }

            img{
                width: 25px;
            }
        }
    }

    @media (max-width: 800px){
        margin-top: 10px;
        padding: 10px 30px;
        box-sizing: border-box;

        h1{
            font-size: 22px;
        }

        p{
            text-align: justify;
            font-size: 18px;
        }


        div{
            margin-top: 30px;

            h5{
                font-size: 26px;
            }

            .ligarBtn{
                width: 250px;
                background: linear-gradient(to right, #00509d, #00000, #00509d);
                border: 1px solid rgba(255,255,255,0.4);
                font-weight: 100;
            }

            .whatsappBtn{
                width: 250px;
                border: 2px solid rgba(255,255,255,0.4);
                background: linear-gradient(to right, #bfd200, #bfd200, #bfd200);
            }
        }
    }
`;