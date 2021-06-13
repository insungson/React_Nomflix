import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// last-child 에서 margin-bottom을 주고 싶지 않다면 아래와 같이 처리해주면 된다!!
const Container = styled.div`
  :not(:last-child){
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

// grid-template-columns 는 자동으로 그리드를 짜주는 것으로 자세한 사항은 아래를 참조하면 된다.
// https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns  
const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

// react에서 children은 일반적으로 해당 컴포넌트 내부 태그 사이의 값을 받는다!
// 그래서 Routes/Home/DetailPresent.js 에서 보면 컴포넌트 자체로 children을 받지 않는다!!
const Section = ({title, children}) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;