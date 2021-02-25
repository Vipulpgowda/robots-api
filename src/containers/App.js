import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => { setRobots(users) })
    }, [])

    const onsearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (!robots.length) ?
        <h1 className="tc">LOADING!!!!</h1>
        :
        (
            <div className='tc'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={onsearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default App;