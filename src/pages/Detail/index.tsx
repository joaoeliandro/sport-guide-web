import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { LogoContainer, Header, SportInfo } from './styles';

import sports from '../../services/data';

interface SportParams {
  sport: string;
}

interface Sport {
  name: string;
  description: string;
  logo: string;
  wikipedia: string;
  links: {
    font: string;
    image: string;
  }[];
}

const Detail: React.FC = () => {
  const { params } = useRouteMatch<SportParams>();
  const [sport, setSport] = useState<Sport | undefined>();

  useEffect(() => {
    const result = sports.find(findSport => findSport.name === params.sport);

    setSport(result);
  }, [params.sport]);

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

      <SportInfo>
        <header>
          <img src={sport?.logo} alt="Nado" />
          <div>
            <strong>{sport?.name}</strong>
            <p>{sport?.description}</p>
            <a target="_blank" rel="noopener noreferrer" href={sport?.wikipedia}>Saiba mais na Wiki</a>
          </div>
        </header>
        <ul>
          {sport?.links.map(link => (
            <li key={link.font}>
              <img src={link.image} alt="Sport" />
              <a target="_blank" rel="noopener noreferrer" href={link.font}>
                Saiba mais
                <FiChevronRight size={20} />
              </a>
            </li>
          ))
          }
        </ul>
      </SportInfo>
    </>
  );
}

export default Detail;
