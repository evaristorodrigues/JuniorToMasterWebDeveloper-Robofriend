import React from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox'
//import { robots } from '../robots';
import './App.css'
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry'
import {setSearchField, requestRobots} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return{
        searchField:state.searchRobots.searchField,
        isPending:state.requestRobots.isPending,
        robots:state.requestRobots.robots,
        error:state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
           onSearchChange:(event)=> dispatch(setSearchField(event.target.value)),
           onRequestRobots:() => dispatch(requestRobots())
    }
}
class App extends React.Component {

    componentDidMount(){        
      this.props.onRequestRobots();
       
    }

    render(){
        
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if(isPending){
           return  <h1>Loading</h1>
        }else{
            return (
                <div className='tc'> 
                  <h1 className='f1'>RoboFrieds</h1>
                  <SearchBox searchChange={onSearchChange}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
