import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import authorImg from '../../assets/author.jpeg';

import sports from '../../services/data';

import { Title, LogoContainer, Form, Sports, Footer } from './styles';

const Home: React.FC = () => {
  const [newSport, setNewSport] = useState('');

  async function handleSport(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    alert('Em breve esta função estará habilitada. Por favor, aguarde!');

    setNewSport('');
  }

  return (
    <>
      <LogoContainer>
        <img src={logoImg} alt="Sports Guide" />
        <p>Sports Guide</p>
      </LogoContainer>
      <Title>Conheça alguns esportes</Title>

      <Form onSubmit={handleSport}>
        <input
          value={newSport}
          onChange={(e) => setNewSport(e.target.value)}
          placeholder="Digite o nome de um esporte" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Sports>
        {sports.map((sport) => (
          <Link key={sport.name} to={`/detail/${sport.name}`}>
            <img src={sport.logo} alt={sport.name} />
            <div>
              <strong>{sport.name}</strong>
              <p>{sport.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Sports>

      <Footer>
        <Link to='/author'>
          <img src={authorImg} alt='João Eliandro' />
          <div>
            <strong>Criador desta página</strong>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Footer>
    </>
  );
}

export default Home;
