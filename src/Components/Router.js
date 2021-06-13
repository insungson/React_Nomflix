//react-router-dom 는 간단한 컴포넌트 묶음이다.. 
//HashRouter 는 감싸주고... exact 는 정확히 path가 일치해야 해당 컴포넌트로 안내한다.
//HashRouter 는 웹이 아닌 앱같은 느낌이 있다.. 그래서
//BrowserRouter 형태로 바꿔보자
//만약 github에 올리는 형태라면 HashRouter로 바꿔줘야 한다!
import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';
import Header from 'Components/Header';
import Detail from 'Routes/Detail';

//return 부분에 path="/tv/popular" 줄을 살펴보자.. 윗줄의 /tv 주소가 같기 때문에 동시에 뜨는게 가능하다!!! 
// 이부분을 사용하여 헤더를 만들어보자!!

// router의 주소가 같은 home / 의 경우 redirect 와 주소가 같이 에러가 발생한다.
// 아래와 같이 switch 로 감싸주면 하나의 router 만 불러오기 때문에 에러를 막아준다!
// from 의 * 는 해당 주소가 아닌 다른 모든 주소는 to="/" home 으로 갈수 있게 만들어준다.

// Detail의 경우 :id 는...(추가로 강의 듣고 정리하기)
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={TV} />
          {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/show/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}