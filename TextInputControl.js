import React,{Component} from 'react';
import {View,TextInput,Button} from 'react-native';

export default class TextInputControls extends Component
{

    constructor(abc)
    {
        super(abc);
        this.state = {Num1:''}; //state variable(Num1) is used to store component value 
    }

    printNumber=()=>
    {
        var N1 = this.state.Num1;
        alert(N1);
    }
  render()
  {
    return(
      <View>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10,backgroundColor:"pink",color:"black",paddingLeft:10}} onChangeText={Num1=>this.setState({Num1})}>

          </TextInput>
          <Button title="Click here" onPress={this.printNumber}></Button>

          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} placeholder="Multiline" multiline={true} numberOfLines={5}></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",borderStyle:"solid",margin:10,textAlign:"center"}} placeholder="Enter name here" placeholderTextColor="red"></TextInput> 
          <TextInput style={{borderWidth:1,borderColor:"red",borderRadius:20,margin:10}}></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}}></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} defaultValue="0.1"></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} value="MM"></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} maxLength={5} placeholder="Maxlength 5"></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} placeholder="Editable false" editable={false}></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} placeholder="Keyboard type" keyboardType="email-address"></TextInput>
          <TextInput style={{borderWidth:1,borderColor:"red",margin:10}} placeholder="Password" secureTextEntry={true}></TextInput>
      </View>
    );
  }
}