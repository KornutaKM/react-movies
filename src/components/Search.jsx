import React, { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  confirmSearch = (e) => {
    if (e.key === 'Enter') {
      this.props.updateSearch(this.state.search, this.state.type)
    }
  }

  filterSearch = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.updateSearch(this.state.search, this.state.type)
      }
    )
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field'>
            <input
              className='validate'
              placeholder='search'
              type='search'
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.confirmSearch}
            />
            <button
              className='btn waves-effect waves-light'
              onClick={() => {
                this.props.updateSearch(this.state.search, this.state.type)
              }}
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='all'
                onChange={this.filterSearch}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='movie'
                onChange={this.filterSearch}
                checked={this.state.type === 'movie'}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='series'
                onChange={this.filterSearch}
                checked={this.state.type === 'series'}
              />
              <span>Series</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='game'
                onChange={this.filterSearch}
                checked={this.state.type === 'game'}
              />
              <span>Game</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
