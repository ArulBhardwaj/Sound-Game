import React, {Component} from 'react';
import {Button,View,Text} from 'react-native';

export class Sound1 extends Component{
  render(){
    return(
      <Button color="red" title="Sound1"></Button>
      
    )
  }
}

export class Sound2 extends Component{
  render(){
    return(
      <Button color="green" title="Sound2"></Button>
      
    )
  }
}

export class Sound3 extends Component{
  render(){
    return(
      <Button color="blue" title="Sound3"></Button>
      
    )
  }
}

export class Sound4 extends Component{
  render(){
    return(
      <Button color="orange" title="Sound4"></Button>
      
    )
  }
}

export default class App extends Component{
  render() {
    return(
      <View style={{marginTop: 100, width: "100%"}}>
      <Sound1/>
      <Sound2/>
      <Sound3/>
      <Sound4/>
      </View>
    );
  }
}
