import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {
  back,
  heart,
  location,
  profilePic,
  bed,
  sink,
  bell,
  info,
  offers,
  shared,
  comments,
} from '../../core/themes';
import {strings} from '../../core/constants';
import {useNavigation} from '@react-navigation/native';
import roots from '../../navigation/roots';

const {width} = Dimensions.get('window');
const height = width * 1;
const images = [
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
];

const RoomScreen = () => {
  const navigation = useNavigation();
  const [activeDot, setActiveDot] = useState(0);

  const changeDot = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeDot) {
      setActiveDot(slide);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute'}}>
        <ScrollView
          paginEnabled
          horizontal
          onScroll={changeDot}
          showsHorizontalScrollIndicator={false}
          style={{width, height}}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              resizeMode={'cover'}
              style={{width, height}}
            />
          ))}
        </ScrollView>
        <View style={styles.dotsContainer}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k == activeDot ? styles.activeDot : styles.dot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.headerButtons}>
        <TouchableOpacity onPress={() => navigation.navigate(roots.loginFigma)}>
          <View style={styles.whiteCircle}>
            <Image source={back} />
          </View>
        </TouchableOpacity>
        <View style={styles.availableContainer}>
          <Text style={styles.availableText}>{strings.available}</Text>
        </View>
        <View style={styles.whiteCircle}>
          <Image source={heart} />
        </View>
      </View>
      <ScrollView style={styles.cardContainer}>
        <View style={styles.headerCard}>
          <View style={styles.locationWithTitle}>
            <View style={styles.location}>
              <Image source={location} />
              <Text style={styles.locationText}>{strings.losAngeles}</Text>
            </View>
            <Text style={styles.specialHouseText}>
              {strings.specialHouseMix}
            </Text>
          </View>
          <Image style={styles.profilePic} source={profilePic} />
        </View>
        <View style={styles.roomOptions}>
          <Text style={styles.infoText}>{strings.highSpeedWifi}</Text>
          <Text style={styles.infoDot}>⬤</Text>
          <Text style={styles.infoText}>{strings.deskspace}</Text>
          <Text style={styles.infoDot}>⬤</Text>
          <Text style={styles.infoText}>{strings.safeLocation}</Text>
        </View>
        <View style={styles.utilitiesContainer}>
          <View style={styles.utilityItems}>
            <Image source={bed} />
            <Text style={styles.number}>{strings.two}</Text>
            <Image style={styles.utilityIcon} source={sink} />
            <Text style={styles.number}>{strings.one}</Text>
            <Image style={styles.utilityIcon} source={bell} />
            <Text style={styles.number}>{strings.one}</Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <Image style={styles.infoIcon} source={info} />
          <Image style={styles.commentsIcon} source={comments} />
          <View>
            <Image style={styles.offersIcon} source={offers} />
            <Text style={styles.offersText}>{strings.offers}</Text>
          </View>
          <View style={styles.endItems}>
            <Image style={styles.offersIcon} source={shared} />
            <Text style={styles.offersText}>{strings.shared}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{strings.description}</Text>
          <Text style={styles.loremText}>{strings.loremIpsum}</Text>
        </View>
      </ScrollView>
      <View style={styles.reserveContainer}>
      
          <Text style={styles.priceText}>{strings.price}</Text>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text style={styles.reservedText}>{strings.reservedNow}</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoomScreen;
