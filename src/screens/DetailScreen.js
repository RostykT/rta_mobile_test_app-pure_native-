import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ScrollView,
} from 'react-native';

import React from 'react';
import Video from 'react-native-video';
import TestVideo from '../assets/terminator.mp4';

const DetailScreen = ({route}) => {
  const item = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.item}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: item.Poster}}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}> {item.Title} </Text>
          <Text> Country: {item.Country}</Text>
          <Text> Year: {item.Year}</Text>
          <Text> Directed by: {item.Directed_by}</Text>
          <Text> About Movie: {item.Description}</Text>
          <Video
            source={TestVideo}
            controls
            paused={false}
            style={styles.backgroundVideo}
            repeat={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20,
  },
  info: {
    margin: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
