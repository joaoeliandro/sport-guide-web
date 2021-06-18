import styled from 'styled-components';

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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    
    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Info = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      transition: border-radius .2s, transform .2s, margin-right .2s;

      &:hover {
        transform: scale(1.5, 1.5);
        border-radius: 10%;
        margin-right: 20px;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
    }
  }

`;
export const ContainerInfo = styled.div`
  background: #fff;
  padding: 24px;
  margin-top: 40px;
  border-radius: 8px;
  position: relative;
      
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;

  div {
    display: flex;
    width: 480px;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: 8px;
    }

    strong {
      font-size: 24px;
    }

    span {
      font-size: 20px;
      margin-left: 5px;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 15px;
    
    a {
      text-decoration: none;
      color: #3b3b4d;

      svg {
        margin: 0 10px;
        transition: transform .2s;

        &:hover {
          transform: scale(1.5, 1.5);
        }
      }
    }
  }
`;
