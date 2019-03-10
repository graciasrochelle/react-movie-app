import React, { Component } from 'react'
import { MovieConsumer } from '../context';
import { Link } from "react-router-dom";
import loading from '../loading.gif';

export default class Details extends Component {
  render() {
    return (
      <MovieConsumer>
      {(value) => {
        if(value.isLoading){
            return (
              <div className="col-9 mx-auto col-md-6 col-lg-3 my-3 align-self-center ">
                <img alt="loading..." src={loading}/>
              </div>);
        }else if((!value.isLoading && value.error) || (!value.isLoading && !value.error && value.details === undefined) ){
          return (
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <button onClick={() => { value.handleList()}}>
                    <Link to="/">Back to List View</Link>
                  </button>
              </div>);
        }else if(value.details !== undefined && !value.isLoading && !value.error){
          const {
              genre,
              poster,
              plot,
              price,
              title
            } = value.details;
            
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-3 my-3">
                    <img src={poster} className="img-fluid" alt="" />
                  </div>
                  <div className="col-10 mx-auto col-md-8 my-3 text-capitalize">
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Genre : <span className="text-uppercase">{genre}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Plot :
                    </p>
                    <p className="text-muted lead">{plot}</p>
                    <button onClick={() => { value.handleList()}}>
                    <Link to="/">Back to List View</Link>
                  </button>
                  </div>
                </div>
              </div>
            );
          }
          }
      }
      </MovieConsumer>
    )
  }
}
