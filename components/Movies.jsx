import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import requests from '../utils/requests.js'
import LinearGradient from 'expo-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Movies = ({ fetchURL, header_title }) => {
  const [movies, setMovies] = useState([])
  const API_KEY = '10c7020f6d6e07f017c4a1ffcbe712ac'

  const requests = {
    fetchNetflixOriginals: {
      title: 'Trending',
      url: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    },
  }

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        `https://api.themoviedb.org/3${fetchURL} `,
      ).then((res) => res.json())

      setMovies(request.results)

      return request
    }

    fetchData()
  }, [])

  console.log(movies)

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={[styles.textStyle, { fontWeight: 'bold', marginLeft: 10 }]}
        >
          {header_title}
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <View
                  style={{
                    backgroundColor: '#181818',
                    margin: 10,
                    borderRadius: 8,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  <View>
                    <Image
                      style={{
                        height: 140,
                        width: 100,
                        borderRadius: 8,
                      }}
                      source={{
                        uri: `https://image.tmdb.org/t/p/original/${item?.backdrop_path}`,
                      }}
                    />
                    <View
                      style={{
                        position: 'absolute',

                        backgroundColor: 'black',
                        borderRadius: 100 / 2,
                        padding: 10,
                        borderWidth: 2,
                        borderColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        top: 50,
                        left: 26,
                      }}
                    >
                      <Ionicons name="play" color={'white'} size={27} />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                      justifyContent: 'space-between',
                      margin: 5,
                    }}
                  >
                    <Ionicons
                      name="information-circle-outline"
                      color={'gray'}
                      size={30}
                    />
                    <Entypo
                      name="dots-three-vertical"
                      color="gray"
                      size={25}
                      style={{ marginTop: 2 }}
                    />
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Movies

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 23,
    fontWeight: '800',
  },
})
