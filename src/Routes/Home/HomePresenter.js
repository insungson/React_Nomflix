import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';

// 아래의 코드첼린지를 해보자!!
// ## Code Challenges

// - [ ] IMDB Link
// - [ ] Tabs inside of Movie / Show Details (YT Videos, Production Company & Countries)
// - [ ] Collections Link
// - [ ] /collections Route
// - [ ] On TV Show, show seasons and creators

//git hub 페이지에 deploy 하는 방법은 package.json 에서 homepage에 주소를 아래와 같이 적는다
// "homepage" : "https://(GitHub ID).github.io/(Repository name)/"
// 아래의 링크에 자세하게 설명이 되어있다.
// https://velog.io/@gwak2837/GitHub-Pages-gh-pages%EB%A1%9C-%EB%AC%B4%EB%A3%8C-%EC%9B%B9-%ED%98%B8%EC%8A%A4%ED%8C%85%ED%95%98%EA%B8%B0
// git hub의 index.html 등을 알아서 처리해준다.
const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => {
  return (
    <>
      <Helmet>
        <title>Movies | Nomflix</title>
      </Helmet>
      {loading ? (<Loader />) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
              {nowPlaying.map(movie => (
                // <span key={movie.id}>{movie.title}</span>
                <Poster 
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
                ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies">
              {upcoming.map(movie => (
                // <span key={movie.id}>{movie.title}</span>
                <Poster 
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
                ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Movie">
              {popular.map(movie => (
                // <span key={movie.id}>{movie.title}</span>
                <Poster 
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
                ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array, 
  upcoming: PropTypes.array, 
  popular: PropTypes.array, 
  error: PropTypes.string, 
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;