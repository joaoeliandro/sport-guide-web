import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiGithub, FiLinkedin } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import authorImg from '../../assets/author.jpeg';

import { LogoContainer, Header, Info, ContainerInfo } from './styles';


const Detail: React.FC = () => {
  return (
    <>
      <Header>
        <LogoContainer>
          <img src={logoImg} alt="Sports Guide" />
          <p>Sports Guide</p>
        </LogoContainer>

        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      <Info>
        <header>
          <img src={authorImg} alt="Nado" />
          <div>
            <strong>João Eliandro</strong>
          </div>
        </header>

        <ContainerInfo>
          <div>
            <strong>Nome Completo:</strong>
            <span>João Eliandro Germano Gomes</span>
          </div>
          <div>
            <strong>Matrícula:</strong>
            <span>201704746</span>
          </div>
          <div>
            <strong>Curso:</strong>
            <span>Engenharia de Computação</span>
          </div>
          <div>
            <strong>Turma:</strong>
            <span>9º Periodo</span>
          </div>
          <footer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jo%C3%A3o-eliandro/">
              <FiLinkedin size={30} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/joaoeliandro">
              <FiGithub size={30} />
            </a>
          </footer>
        </ContainerInfo>
      </Info>
    </>
  );
}

export default Detail;
