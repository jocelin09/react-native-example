import React,{Component} from 'react';
import {View,TextInput,Button} from 'react-native';

export default class AddNumbs extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {Num1:0,Num2:0};//state variable(Num1,Num2) is used to store component value 
  }


    abc=()=> //arrow function
    {
      var n1 = parseInt(this.state.Num1);
      var n2 = parseInt(this.state.Num2);

      var n3 = n1 + n2;

      alert(n3);
    }

  /*   method2=(Num)=> //arrow function
    {
        alert(Num);
    } */
  render()
  {
    return(
      <View>
        <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} placeholder="Enter number 1" onChangeText={Num1 => this.setState({Num1})} keyboardType="number-pad"></TextInput>
        <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} placeholder="Enter number 2" onChangeText={Num2 => this.setState({Num2})} keyboardType="number-pad"></TextInput>
        <Button title="Click here" onPress={this.abc}></Button>

   {/*  <Button title="Click here" onPress={this.method2.bind(this,"String value passed")} ></Button>  */}
      </View>
    );
  }
}