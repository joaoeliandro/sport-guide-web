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

export const SportInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 5px;
      }
      
      a {
        font-size: 18px;
        margin-top: 5px;
        color: #3d3d4d;
        transition: color .2s;
        
        &:hover {
          color: #a8a8b3;
        }
      }
    }
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    margin-top: 40px;
    
    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
        transition: border-radius .2s, transform .2s;
        cursor: pointer;
        
        &:hover {
          transform: scale(1.15, 1.15);
          border-radius: 5px;
        }
      }

      a {
        font-size: 18px;
        text-decoration: none;
        color: #3d3d4d;
        transition: color .2s, transform .2s;
        margin-top: 10px;

        display: flex;

        align-items: center;
        justify-content: center;
        
        &:hover {
          color: #a8a8b3;
          transform: translateX(5px);
        }
      }
    }
  }
`;
