import React, { Component } from 'react';
import Card from './Card';
import Sprint from '../atom/Icon';

class List extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true,
        };
    }
    async componentDidMount() {
        const movies = await fetch('../../../assets/data.json');
        const moviesJSON = await movies.json();
        if (moviesJSON) {
            this.setState({
                data: moviesJSON,
                loading: false,
            });
        }
    }
    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>
        }
        return (<div className='row'>{data.map(movie => <div className='col-sm-2' key={movie.id}>
        <Card key={movie.id} movie={movie} />
        <Sprint filename="media/sprite.png" icon={movie.icon} width={74} height={80}></Sprint></div>
        )}</div>);
    }
}
export default List;