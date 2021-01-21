import React, { FunctionComponent } from 'react';
import { Container, StyledLink } from '../style/Header.style';

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <StyledLink to="/Home"> Home </StyledLink>
      <StyledLink to="/profile"> Profile </StyledLink>
    </Container>
  );
};
