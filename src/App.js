import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';



class App extends Component {
    constructor(){
        super();
        this.state ={
            robots: robots,
            searchfield: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
          <h1>Loading</h1> :
          (
            <div className='tc'>
            <header>
                <div className="heropanel__content">
                <h1 className="f1">ROBOFRIENDS</h1>
            </div>
            </header>
          <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots} />
        </div>
          );
      }
    }

export default App;