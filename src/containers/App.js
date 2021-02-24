import React from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
        this.onsearchChange = this.onsearchChange.bind(this);
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onsearchChange(event) {
        this.setState({ searchField: event.target.value });
    }
    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (!robots.length) ?
            <h1 className="tc">LOADING!!!!</h1>
            :
            (
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onsearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )

    }
}

export default App;