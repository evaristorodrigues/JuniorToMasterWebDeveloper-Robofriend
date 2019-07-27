import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox'
//import { robots } from '../robots';
import './App.css'
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry'

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            
                robots:[],
                searchfield:''
            }          
        }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}));
       
    }
    onSearchChange =(event)=>{     
       this.setState({searchfield:event.target.value});  
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if(!robots.length){
           return  <h1>Loading</h1>
        }else{
            return (
                <div className='tc'> 
                  <h1 className='f1'>RoboFrieds</h1>
                  <SearchBox searchChange={this.onSearchChange}/>
                  <Scroll>
                    <ErrorBoundry>
                      <CardList robots={filteredRobots}/>
                     </ErrorBoundry>
                  </Scroll>                  
                </div>
              );
        }

    }


}
export default App;
