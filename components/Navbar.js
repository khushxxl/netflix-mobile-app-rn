import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20,
      }}
    >
      <View>
        <Image
          source={require('../images/netflix-logo.png')}
          style={{ height: 40, width: 30 }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="chrome" color={'white'} size={27} />
        <Ionicons
          name="notifications"
          color={'white'}
          size={27}
          style={{ marginLeft: 15 }}
        />
        <Image
          source={require('../images/minions.png')}
          style={{ height: 30, width: 30, marginLeft: 15 }}
        />
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})
