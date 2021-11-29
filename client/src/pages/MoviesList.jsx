import React, { Component } from 'react'
import {useTable} from 'react-table'
import api from '../api'

import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateMovie extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        const movies = await api.getAllMovies();
        
        this.setState({
            movies: movies.data.data,
            isLoading: false,
        });
    }

    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)

        let showTable = true
        if (!movies.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    movies.map((movie, key) => (
                        <div>
                            <span>Title: {movie.name}</span>
                            <UpdateMovie id={movie._id} />
                            <DeleteMovie id={movie._id} />
                        </div>
                    ))
                )}
            </Wrapper>
        )
    }
}

export default MoviesList