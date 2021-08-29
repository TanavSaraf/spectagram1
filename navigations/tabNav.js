import {CreateBottomNavigator}  from '@react-navigation/bottom-tabs'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedRead from '../screens/Feed';
import CreateFeed  from '../screens/CreatePost';
export default class TabNav extends React.Component{
    
render(){
    const Tab=CreateBottomNavigator()
    return(<View>

            <Tab.Navigator>
                <Tab.Screen name={Feed} component={FeedRead} />
                <Tab.Screen name={Create} component={CreateFeed} />
            </Tab.Navigator>

    </View>)
}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  