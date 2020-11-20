import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  Write:{screen:WriteScreen},
  Read:{screen:ReadScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==="WriteScreen")
      {
        return(
            <Image
            source={require('./assets/write.png')}
            style={{width:80,height:80}}
            />
        )
      }
      else if(routeName==="ReadScreen")
      {
        return(
          <Image
          source={require('./assets/read.png')}
          style={{width:80,height:80}}
          />
      )
      }
    }
  })
}

)


//create App container
const AppContainer=createAppContainer(TabNavigator)