// 시각장애인을 위해 screenReader가 loading을 읽어준다. 아래와 같이 처리를 한다면... 웹에서 알아서 처리해준다
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA 에서 자세한걸 알아보자

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      ⏳
    </span>
  </Container>
);