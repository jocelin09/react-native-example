import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class ScreenNav1 extends Component
{

    show=()=>{
        this.props.navigation.navigate('Screen2');
    }
  render()
  {
    return(
      <View>
        <Text style={{textAlign:'center',fontSize:20,lineHeight:50}}>Screen 1</Text>
        <Button title="Next" onPress={this.show}></Button>
      </View>
    );
  }
}