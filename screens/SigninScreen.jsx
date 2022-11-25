import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   getAuth,
// } from 'firebase/auth'

const SigninScreen = () => {
  const navigation = useNavigation()

  const emailRef = useRef(null)
  const passRef = useRef(null)

  // const auth = getAuth()

  // const register = (e) => {
  //   e.preventDefault()

  //   createUserWithEmailAndPassword(
  //     auth,
  //     emailRef.current.value,
  //     passwordRef.current.value,
  //   )
  //     .then((authUser) => {
  //       console.log(authUser)
  //     })
  //     .catch((e) => alert(e.message))
  // }

  // const signin = (e) => {
  //   e.preventDefault()
  //   signInWithEmailAndPassword(
  //     auth,
  //     emailRef.current.value,
  //     passRef.current.value,
  //   )
  //     .then((authUser) => {
  //       console.log(authUser)
  //     })
  //     .catch((e) => alert(e.message))
  // }

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <ImageBackground
        style={{
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={{
          uri:
            'http://authors.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg',
        }}
      >
        <View style={{ alignItems: 'center', alignSelf: 'center' }}>
          <View>
            <TextInput
              ref={emailRef}
              autoFocus
              placeholder="Email or phone number"
              style={{
                height: 60,
                backgroundColor: '#333333',
                width: 340,
                color: '#8C8C8C',
                fontWeight: '600',
                paddingLeft: 10,
                fontSize: 15,
                borderRadius: 7,
              }}
            />
            <TextInput
              ref={passRef}
              secureTextEntry={true}
              placeholder="Password"
              style={{
                marginTop: 15,
                height: 60,
                backgroundColor: '#333333',
                width: 340,
                color: '#8C8C8C',
                fontWeight: '600',
                paddingLeft: 10,
                fontSize: 15, 
                borderRadius: 7,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              try {
                navigation.navigate('LaunchScreen')
              } catch (error) {}
            }}
            style={{
              width: 340,
              backgroundColor: '#e50914',
              padding: 9,
              borderRadius: 8,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              try {
                // register()
                console.log('register success')
                navigation.navigate('LaunchScreen')
              } catch (error) {
                console.log(error)
              }
            }}
            style={{
              width: 340,
              backgroundColor: '#e50914',
              padding: 9,
              borderRadius: 8,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
              }}
            >
              Click on Register if haven't created a account before, then Sign
              In
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({})
