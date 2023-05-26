import React, { Component } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
    search: '',
  }

  updateSearchHandler = (str, type = 'all') => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t&s=${str}&type=${
        type !== 'all' ? `${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
  }
  render() {
    const { movies } = this.state
    return (
      <main className='container content'>
        <Search updateSearch={this.updateSearchHandler} />
        {movies ? (
          movies.length ? (
            <Movies movies={movies} />
          ) : (
            <Preloader />
          )
        ) : (
          <h1>Not found</h1>
        )}
      </main>
    )
  }
}

export default Main
