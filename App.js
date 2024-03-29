import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import {observer, action, inject } from 'mobx-react';
import Icon from 'react-native-ionicons';
import MainStore from './mobx/store'
import Header from './components/header';
import Opening from './components/opening';
import MainPage from './components/mainPage';
import SignIn from './components/signin';
import VideoUpload from './components/videoUpload';
import DuyuruNavigator from './components/duyuruNavigator'
import Premium from './components/premium';
import SignNavigator from './components/signNavigator';
import User from "./components/user";
import axios from 'axios';
import MainPageNavigator from './components/mainPageNavigator';



export default class App extends React.Component {
  constructor(props){
    super(props);
    console.disableYellowBox = true;
    this.state = {
      // showLogin: MainStore.showLogin,
      // showHome: MainStore.showHome,
      // showUser: MainStore.showUser,
      // showPerson: MainStore.showPerson,
      // showAdd: MainStore.showAdd
      isSignIn: true
    }
  }
  render() {
    return (
      <AppContainer/>
      
      // <MainPage/>
    )
  }
}

const AppNavigator2  = createBottomTabNavigator({
  "Duyuru": {
    screen: DuyuruNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor:'#579ACF'
      },
      tabBarLabel: "Duyurular",
      tabBarIcon: ({tintColor}) => {
        return(
          <Icon name = "information-circle-outline" color = {tintColor} ></Icon>
        )
      }
    }
  },
  "Ana Sayfa" : {
    screen: MainPageNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Ana Sayfa",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "home" color = {tintColor}></Icon>)
      }
    }
  },
  "Video Ekle": {
    screen : VideoUpload,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Video Ekle",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "add-circle-outline" color = {tintColor}></Icon>)
      }
    }
  },
  "Premium" : {
    screen: Premium,
    navigationOptions: {
      tabBarLabel : "Premium",
      tabBarIcon: () => {
        return (
          <Icon name = "trophy" color = '#FFDF00'></Icon>)
      }
    }

  },
  "Profile" : {
    screen : User,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Profil",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "person" color = {tintColor}></Icon>)
      }
    }
  },
})

const authStack = createStackNavigator(
  {
    "Opening": {
      screen: Opening,
      navigationOptions: {
        header: null
      }
    }
  })


const AppContainer  = createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator2,
    Auth: authStack
  },
  {
    initialRouteName: "Auth"
  }
))

// <View>
      //   {page()}
      //   {/* <View style = {{
      //       flexDirection: "row",
      //       position: 'absolute',
      //       backgroundColor: 'white',
      //       padding: 10,
      //       top: 615
      //   }}>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //       >
      //         <Icon name = "home"></Icon>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //       >
      //         <Icon name = "add-circle-outline"></Icon>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //         onPress = {() => {this.props.navigation.navigate('Opening')}}
      //       >
      //         <Icon name = "person"></Icon>
      //       </TouchableOpacity>
      //   </View> */}
      // </View>