import React, { Component } from 'react';
import Movie from './Movie';
import Title from './Title';
import { MovieConsumer } from "../context";
import loading from '../loading.gif';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="movies" title="list"/>
              <div className="row">
                <MovieConsumer>
                {value => {
                  console.log(value);
                  if(!value.isLoading && value.error !== undefined){
                    return (
                      <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                          <button onClick={() => { value.handleList()}}>
                              <Link to="/">Refresh List View</Link>
                            </button>
                        </div>);
                  }
                  if(value.isLoading && value.error === undefined){
                    return (
                      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3 align-self-center ">
                        <img alt="loading..." src={loading}/>
                      </div>
                      );
                  }else{
                    return value.movies.map(movie => {
                      return <Movie key={movie.id} movie={movie}/>
                    })
                  }
                }
                }
                </MovieConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default MovieList;