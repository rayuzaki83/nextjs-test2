import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My NextJS App</title>
      </Head>

      <Wrapper>
        <Button>Click me!</Button>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: #00b894;
  border-radius: 3px;
  border: none;
  padding: 10px;
  margin: 10px;
  color: white
  `;
