// styled-reset 는 css 를 초기화 해줘서 글로벌로 스타일을 적용시킬 수 있다.
// 이부분은 App.js 로 export 하면 글로벌로 스타일이 먹힌다!
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
  }
  *{
      box-sizing:border-box;
  }
  body{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size:12px;
      background-color:rgba(20, 20, 20, 1);
      color:white;
      padding-top:50px;
  }
`;

export default globalStyles;