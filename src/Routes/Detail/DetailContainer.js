import { movieApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: {pathname}
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }
  //components/Header 컴포넌트에서 withRouter로 데코레이팅을(감싸기) 해줬기 때문에
  // 하위의 라우터 컴포넌트, 라우터함수를 가지고 있다. 
  //그렇기 때문에.. components/Router 에서 Detail로 넘겨주는 고유의 정보들을 해당 컴포넌트에서 props로 받을 수 있다.
  async componentDidMount() {
    const {
      match: {params: {id}},
      history: {push}
    } = this.props;
    console.log('this.props: ', this.props);
    const {isMovie} = this.state;
    const parsedId = parseInt(id);
    console.log('parsedId: ', parsedId);
    if (isNaN(parsedId)) {
      return push('/');
    }
    let result = null;
    try {
      if (isMovie) {
        //아래의 주석처리된 코드는 아래와 같이 바꿀 수 있다.
        // const request = await movieApi.movieDetail(parsedId);
        // result = request.data;
        ({data: result} = await movieApi.movieDetail(parsedId));
      } else {
        // const request = await tvApi.showDetail(parsedId);
        // result = request.data;
        ({data: result} = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({error: "Can't find anything."});
    } finally {
      this.setState({loading: false, result});
    }
  }

  render() {
    const {result, error, loading} = this.state;
    return (
      <DetailPresenter result={result} error={error} loading={loading} />
    );
  }
}