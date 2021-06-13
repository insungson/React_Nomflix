import React from 'react';
// // import "./Header.css";
// import styles from './Header.module.css';
// //위와 같이 불러와서 아래와 같이 자바스크립트를 사용하듯이 className에 넣는다면 전역이 아닌 로컬로 사용이 가능하다.
// export default () => {
//   return (
//     // <header className="nav">
//     <header className={styles.navList}>
//       <h1>
//         <li>
//           <a href="/">Movies</a>
//         </li>
//         <li>
//           <a href="/tv">Tv</a>
//         </li>
//         <li>
//           <a href="/search">Search</a>
//         </li>
//       </h1>
//     </header>
//   );
// };


///// 아래와 같이 스타일드 컴포넌트를 적용시켜보자
import {Link, withRouter} from 'react-router-dom';
//withRouter 는 다른 컴포넌트를 감싸는 컴포넌트이다. Router에 다른 정보를 넘겨준다
//라우터의 정보들을 가져올 수 있다!!!
import styled from 'styled-components';

const Header = styled.header`
  color:white;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:50px;
  display:flex;
  align-items:center;

  background-color: rgba(20, 20, 20, 0.8);
  z-index:10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

//styled components로 불러온것은 props(current)로 값을 넘겨받을 수 있다. 값을 받아 css를 바꿔보자
const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

//기존의 react 방식이 아닌 것은 아래와 같이 사용하면 된다.
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter((props) => {
  console.log('props: ', props);
  const pathname = props?.location?.pathname;
  return (
    <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
  );
});