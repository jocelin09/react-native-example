/*  import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class App extends Component
{
  render()
  {
    return(
      <View>
        <Text style={{textAlign:'center',fontSize:20,backgroundColor:'yellow',color:'red',fontWeight:'bold',fontStyle:"italic",letterSpacing:50,lineHeight:50}}>Hello World</Text>
      </View>
    );
  }
} 
 */


import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//include all screens below that are used for navigation //
import Screen1 from './ScreenNav1';
import Screen2 from './ScreenNav2';


const ScreenInfo = createStackNavigator(
  {
    Screen1 : {screen:Screen1},
    Screen2 : {screen:Screen2},
  }
);

export default createAppContainer(ScreenInfo) ;



