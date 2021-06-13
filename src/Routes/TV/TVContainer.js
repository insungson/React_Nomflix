import React from 'react';
import TVPresenter from './TVPresenter';
import {tvApi} from 'api';

export default class extends React.Component {
  state={
    topRated: null,
    popular: null,
    airingToday: null,
    loading: false,
    error: null,
  };

  //Home의 컨테이너처럼 async componentDidMount() {} 처럼 사용해도 되고 아래처럼 사용해도 된다
  componentDidMount = async() => {
    try {
      const {
        data: {results: topRated}
      } = await tvApi.topRated();
      const {
        data: {results: popular}
      } = await tvApi.popular();
      const {
        data: {results: airingToday}
      } = await tvApi.airingToday();
      this.setState({topRated, popular, airingToday});
      // throw Error();
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    } finally {
      this.setState({loading: false});
    }
  }

  render() {
    const {topRated, popular, airingToday, loading, error} = this.state;
    return (
      <TVPresenter 
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}