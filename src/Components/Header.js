import React from 'react';
import styled from 'styled-components';

const local = 'https://firebasestorage.googleapis.com/v0/b/wldata.appspot.com/o/local-two-svgrepo-com.png?alt=media&token=5255b0d5-aebd-497b-8b4d-ce3bcc60cb66'

export default function Header() {
  return (
    <HeaderComponent>
      <img className='logoKR' src='https://firebasestorage.googleapis.com/v0/b/wldata.appspot.com/o/logo-KR-favicon-1-300x300.png?alt=media&token=4bf52e9b-a682-42f6-b9b8-156df47c82e3' alt='KR TECHNOLOGY Logo' />
      <a href='#'>KR TECHNOLOGY</a>

      <IconsAreaContainer>
        <IconsArea>
        {/* <IconImg src={local} alt='Location Icon' /> */}
            <div>
                <p>Seg - Sex:</p>
                <span>9:00 ás 17:00</span>
            </div>
        </IconsArea>

        <IconsArea>
        {/* <IconImg src={local} alt='Location Icon' /> */}
            <div>
                <p>MATRIZ</p>
                <span>Porto Alegre | RS - BR</span>
            </div>
        </IconsArea>
      </IconsAreaContainer>
    </HeaderComponent>
  )
}



const HeaderComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 40px;
    box-sizing: border-box;
    position: relative;
    background: linear-gradient(to bottom, #003566, #a2d6f9);

    .logoKR {
        width: 250px;
    }

    a {
        font-size: 48px;
        font-weight: 800;
        text-decoration: none;
        color: white;
        position: relative;

        &::after {
            content: " ";
            width: 0%;
            height: 6px;
            background-color: #1e96fc;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: .5s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
    }

    @media (max-width: 800px){
        .logoKR {
            width: 200px;
        }

        a {
            font-size: 28px;
        }
    }
`;


const IconsAreaContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    @media (max-width: 800px){
        margin-top: 40px;
    }
`;

const IconsArea = styled.div`
    display: flex;
    align-items: center;

    div {

        
        p {
            margin: 0;
            color: rgba(0,0,0,0.7);
            font-weight: 800;
        }

        span {
            color: rgba(0,0,0,0.7);
        }
    }

    @media (max-width: 800px){
        div {
            p {
                margin: 0;
                color: rgba(0,0,0,0.5);
                font-weight: 800;
                font-size: 12px;
            }

            span {
                font-size: 12px;
                color: rgba(0,0,0,0.5);
            }
        }
    }
`;