import React, { Component } from 'react';

const MovieContext = React.createContext();

class MovieProvider extends Component {
  state = {
    movies: [],
    details: undefined,
    isLoading: true,
    error: undefined
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getMovies();
  }

  getMovies =  async () => {
    let tempMovies = [];
    
    const request = await fetch(`/api/movies`);

    const response = await request.clone().json();
    response.forEach(item => {
      const singleItem = {...item};
      tempMovies = [...tempMovies, singleItem];
    })
    if(request.status === 200){
      this.setState(() => {
        return {
          movies: tempMovies,
          isLoading: false,
          error: undefined
        }
      });
    }else{
      return {
        movies: [],
        error: request.status , 
        isLoading: false}
    }
  }

  getItem = async (id, provider) => {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    const params = provider +`/`+ id;
    const request = 
    await fetch(`https://localhost:5001/api/movies/${params}`, 
    {
      headers: headers
    });
    console.log(request);
    const data = await request.json();
    if(request.status === 200){
      this.setState(() => {
        return {
          details: data,
          isLoading: false,
          error: undefined
        }
      });
    }else{
      return {
        details: undefined ,
        error: request.status , 
        isLoading: false}
    }
  }

  handleDetail = (id, provider) => {
    this.setState({error: undefined, isLoading: true})
    this.getItem(id, provider);
  }

  handleList = () => {
    this.setState({error: undefined, isLoading: true})
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