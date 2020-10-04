import React, {PureComponent} from 'react';

class CounterButton extends PureComponent{
    constructor(){
      super();
      this.state = {
          count:0
      }
    }
    //Mudar de PureComponent para Component para usar a função abaixo
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.count !== this.state.count){
    //        return true;
    //     }
    //       return false;
        
    // }

    updateCount = () =>{
        this.setState(state =>{
            return {count:this.state.count + 1}
                   });
    }

    render(){
        console.log('CounterButton');
        return (<button color={this.props.color} onClick={this.updateCount}> Count:{this.state.count}</button>);
    }

}

export default CounterButton;