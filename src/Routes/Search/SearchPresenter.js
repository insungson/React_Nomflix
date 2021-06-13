import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

// unset 은 모든 속성을, 속성이 값을 상속하는 경우 상속값으로, 아니면 초깃값으로 변경한다.
// css all의 기능에 대한 것은 아래의 주소를 참조해서 보자 
// https://developer.mozilla.org/ko/docs/Web/CSS/all
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({        
  movieResult,
  tvResult,
  loading,
  error,
  handleSubmit,
  searchTerm,
  updateTerm
  }) => {
    return (
      <Container>
        <Helmet>
          <title>Search | Nomflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
          <Input 
            placeholder={"Search Movies or TV Shows...."}
            value={searchTerm}
            onChange={updateTerm}
          />
        </Form>
        {loading ? (
        <Loader />
        ) : (
        <>
          {movieResult && movieResult.length > 0 && (
            <Section title="Movie Results">
              {movieResult.map(movie => (
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
          {tvResult && tvResult.length > 0 && (
            <Section title="TV Show Results">
              {tvResult.map(show => (
                // <span key={show.id}>{show.name}</span>
                <Poster 
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date.substring(0, 4)}
                  isMovie={true}
                />                
              ))}
            </Section>
          )}
        </>  
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResult && tvResult.length === 0 && movieResult && movieResult.length === 0 && (
          <Message text="Nothing found" color="#95a5a6" />
        )}
      </Container>
    );
  };

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;