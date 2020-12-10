import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const Index = () => (
  <Container>
    <Title>sntwandy.dev is building...🔨🔨</Title>
    <Subtitle>Will be ready very soon.</Subtitle>
    <div className="lds-heart"><div></div></div>
  </Container>
)

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`

const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
`

export default Index;