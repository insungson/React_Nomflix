import React from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from 'api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: false,
  };

  async componentDidMount() {
    try {
      const {
        data: {results: nowPlaying}
      } = await movieApi.nowPlaying();
      const {
        data : {results: upcoming}
      } = await movieApi.upcoming();
      const {
        data: {results: popular}
      } = await movieApi.popular();
      console.log('nowPlaying, upcoming, popular: ', nowPlaying, upcoming, popular);
      this.setState({
        nowPlaying, upcoming, popular
      });
    } catch  {
      this.setState({
        error: "can't find movies information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const {nowPlaying, upcoming, popular, error, loading} = this.state;
    return (
      <HomePresenter 
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}