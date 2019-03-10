import React, { Component } from 'react';

const MovieContext = React.createContext();

class MovieProvider extends Component {

  state = {
    movies: [],
    details: undefined,
    isLoading: false,
    error: false,
    refresh: false
  }

  componentDidMount() {
    this.getMovies();
  }

  callAPI = async (url, signal) =>{
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('mode', 'no-cors');
    const request = await fetch(url, { headers: headers }, {signal});

    return request;
  }

  getMovies =  async () => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => { 
      controller.abort();
    }, 500);

    const endpoint = `/api/movies/`;
    const url = `https://webmovieapi.azurewebsites.net${endpoint}`;
    let tempMovies = [];

    this.setState({ error: false, isLoading: true });

    const request = this.callAPI(url, signal);

    const response = await request;
    if(response.status !== 200){
      this.setState(() => {
        return {
          mError: true, 
          isLoading: false
        }
      });
    }else if(response.status === 200){
        const data = await response.json();
        (data.value).forEach(item => {
          const singleItem = {...item};
          tempMovies = [...tempMovies, singleItem];
        })
        this.setState(() => {
          return {
            movies: tempMovies,
            isLoading: false,
            error: false
          }
        });
    }
  }

  getItem = async (id, provider) => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => { 
      controller.abort();
    }, 500);
    const params = provider +`/`+ id;
    const endpoint = `/api/movies/`;
    const url = `https://webmovieapi.azurewebsites.net${endpoint}${params}`;

    this.setState({ error: false, isLoading: true });
    const request = this.callAPI(url, signal);

    const response = await request;
 
    if(response.status !== 200){
      this.setState(() => {
        return {
          error: true, 
          isLoading: false
        }
      });
    }else if(response.status === 200){
      const data = await response.json();
      this.setState(() => {
        return {
          details: data.value,
          isLoading: false,
          error: false
        }
      });
    }
  }

  handleDetail = (id, provider) => {
    this.setState({ details: undefined })
    this.getItem(id, provider);
  }

  handleList = () => {
    this.setState({ movies: [] })
    this.getMovies();
  }

  render() {

    return (
      <MovieContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        handleList: this.handleList
      }}>
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

const MovieConsumer = MovieContext.Consumer;

export { MovieProvider, MovieConsumer };