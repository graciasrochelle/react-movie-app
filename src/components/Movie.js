import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MovieConsumer } from '../context';
import PropTypes from 'prop-types';

class Movie extends Component {
  render() {
    const {id, title, poster, year, type, provider} = this.props.movie;
    return (
      <MovieWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <p className="align-self-center mb-0 card-title">{type}</p>
        <MovieConsumer>
          {value => {
            return (
              <div className="img-container p-5">
                <img src={poster} alt="" className="card-img-top" />
                <button className="view-btn" onClick={() => { value.handleDetail(id, provider)}}>
                  <Link to="/details">View Details</Link>
                </button>
              </div>
            );
          }}
        </MovieConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            {year}
          </h5>
        </div>
      </div>
    </MovieWrapper>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.string,
    type: PropTypes.string
  }).isRequired
}

const MovieWrapper = styled.div`
  .card {
    border-color: transparent;
  }
  .card-title{
    padding: 0.2rem 0.4rem;
    font-size: 1.4rem;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .view-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
  }
  .view-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`
export default Movie;