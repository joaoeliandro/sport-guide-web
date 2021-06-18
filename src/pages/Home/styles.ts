import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;  

  margin-top: 80px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 35px;
    border-radius: 10px;
  }

  p {
    font-size: 20px;
    margin-left: 8px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  
  button {
    width: 210px;
    height: 70px;
    background: #ef761e;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    
    &:hover {
      background: ${shade(0.2, '#ef761e')};
    }
  }
`;

export const Sports = styled.div`
  margin-top: 80px;
  max-width: 700px;
  
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%auto;
    padding: 24px;
    display: block;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    
    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Footer = styled.footer`
   margin-top: 80px;
  max-width: 700px;
  
  a {
    background: #3d3d4d;
    border-radius: 5px;
    width: 100%auto;
    padding: 24px;
    display: block;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    
    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #fff;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
