import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../style/Home.style';

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <Link to="/profile"> Profile </Link>
      Hello World!!
    </Container>
  );
};
