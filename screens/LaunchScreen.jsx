import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LaunchScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              marginRight: -40,
            }}
          >
            Who's Watching?
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Edit
        </Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../images/minions.png')}
            style={{ height: 100, width: 100, borderRadius: 7 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            marginTop: 5,
            fontSize: 18,
          }}
        >
          User
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({})
