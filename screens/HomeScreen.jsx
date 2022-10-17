import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Navbar from '../components/Navbar'
import Movies from '../components/Movies'
import requests from '../utils/requests'

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width

  const [movie, setMovie] = useState([])
  const API_KEY = '10c7020f6d6e07f017c4a1ffcbe712ac'
  const Myrequests = {
    fetchNetflixOriginals: {
      title: 'Trending',
      url: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    },
  }

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        `https://api.themoviedb.org/3${Myrequests.fetchNetflixOriginals.url} `,
      ).then((res) => res.json())

      setMovie(
        request.results[Math.floor(Math.random() * request.results.length - 1)],
      )

      return request
    }

    fetchData()
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
          }}
          style={{ height: 500, justifyContent: 'space-between' }}
        >
          <View style={{ marginTop: 20 }}>
            <Navbar />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Text style={styles.textStyle}>TV Show</Text>
              <Text style={styles.textStyle}>Movies</Text>
              <Text style={styles.textStyle}>Categories</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginBottom: 50,
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity>
                <Ionicons name="add" color={'white'} size={35} />
              </TouchableOpacity>
              <Text
                style={[styles.textStyle, { fontSize: 14, fontWeight: '800' }]}
              >
                My List
              </Text>
            </View>
            <TouchableOpacity>
              <View style={styles.boxStyle}>
                <Ionicons name="play" color={'black'} size={20} />
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontSize: 14,
                      fontWeight: '700',
                      color: 'black',
                      marginLeft: 10,
                      marginRight: 10,
                    },
                  ]}
                >
                  Play
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity>
                <Ionicons
                  name="information-circle-outline"
                  color={'white'}
                  size={35}
                />
              </TouchableOpacity>
              <Text
                style={[styles.textStyle, { fontSize: 14, fontWeight: '800' }]}
              >
                Info
              </Text>
            </View>

            <ImageBackground>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  bottom: 0,
                }}
              ></View>
            </ImageBackground>
          </View>
        </ImageBackground>

        {/*  Movies Section : */}
        <Movies
          fetchURL={requests.fetchNetflixOriginals.url}
          header_title="Netflix Originals"
        />
        <Movies
          fetchURL={requests.fetchTrending.url}
          header_title="Trending Now"
        />
        <Movies
          fetchURL={requests.fetchTopRated.url}
          header_title="Highly Rated"
        />
        <Movies
          fetchURL={requests.fetchComedyMovies.url}
          header_title="Comedy Movies"
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
  boxStyle: {
    backgroundColor: 'white',
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
