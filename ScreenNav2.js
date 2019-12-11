import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class ScreenNav2 extends Component
{ 
    show=()=>{
    this.props.navigation.navigate('Screen1');
}
  render()
  {
    return(
      <View>
        <Text style={{textAlign:'center',fontSize:20,lineHeight:50}}>Screen 2</Text>
        <Button title="Previous" onPress={this.show}></Button>
      </View>
    );
  }
}