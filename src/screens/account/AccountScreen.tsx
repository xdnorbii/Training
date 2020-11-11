import React, { } from 'react';
import { View, Image, Text, SafeAreaView, ImageBackground } from 'react-native';
import {
  userPic,
  userPic2,
  userPic3,
  userPic4,
  locationPin,
  fullStar,
  emptyStar,
  back,
  chart,
  client,
  dollar,
  post1,
  post2,
  post3,
  post4,
} from '../../core/themes';
import { strings } from '../../core/constants'
import styles from './styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../core/components';
import roots from '../../navigation/roots';
import { Svg, Circle, Text as SVGText } from 'react-native-svg';
import CircularProgress from '../../core/components/CircularProgress';


const currentUser = {
  name: "Timmy bremor",
  image: userPic,
  stars: 4,
  location: "Los Angeles",
  reviews: 10
}

const mockData = [
  {
    location: 'Los Angeles, CA',
    image: post1,
    name: "Special House mix 1",
    price: '$1000',
    reviews: 10,
    rooms: {
      bedrooms: 2,
      bathrooms: 2,
      kitchens: 2
    },
    user: {
      name: "Timmy bremor",
      image: userPic,
      stars: 2
    }

  },
  {
    location: 'Los Angeles, CA',
    image: post2,
    name: "Special House mix 2",
    price: '$1500',
    reviews: 10,
    rooms: {
      bedrooms: 2,
      bathrooms: 1,
      kitchens: 1
    },
    user: {
      name: "Mike Smith",
      image: userPic2,
      stars: 4
    }

  },
  {
    location: 'Los Angeles, CA',
    image: post3,
    name: "Special House mix 3",
    price: '$1800',
    reviews: 10,
    rooms: {
      bedrooms: 3,
      bathrooms: 2,
      kitchens: 1
    },
    user: {
      name: "Barbara bremor",
      image: userPic3,
      stars: 4
    }

  },
  {
    location: 'Los Angeles, CA',
    image: post4,
    name: "Special House mix 4",
    price: '$2500',
    reviews: 10,
    rooms: {
      bedrooms: 5,
      bathrooms: 2,
      kitchens: 1
    },
    user: {
      name: "Kim Jhung Ea",
      image: userPic4,
      reviews: 10,
      stars: 4
    }

  }
]

const renderStars = (nrStars, votes) => {
  return (
    <View style={styles.row}>
      {Array(nrStars)
        .fill(0)
        .map(() => (
          <Image source={fullStar} height={19} width={19} />
        ))}
      {Array(5 - nrStars)
        .fill(0)
        .map(() => (
          <Image source={emptyStar} height={19} width={19} />
        ))}
      <Text style={styles.nrVotes}>({votes})</Text>
    </View>
  );
};

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.rootScroll}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(roots.loginFigma)}>
          <Image source={back} height={16} />
        </TouchableOpacity>
        <View style={styles.userView}>
          <View style={styles.userDetails}>
            <Text style={styles.nameText}>{currentUser.name}</Text>
            <View>{renderStars(currentUser.stars, currentUser.reviews)}</View>
            <View style={[styles.row, { width: 100 }]}>
              <Image source={locationPin} height={20} />
              <Text style={styles.locationText}>{currentUser.location}</Text>
            </View>
          </View>
          <Image source={currentUser.image} style={styles.userImage} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.findHomeView}>
            <Text style={styles.findHomeText}>{strings.findHomeGold}</Text>
            <ScrollView
              style={styles.findHomeScrollView}
              horizontal={true}>
              <View style={styles.findHomeCard}>
                <Text style={styles.findHomeCardTitle}>{strings.estadistics}</Text>
                <View style={[styles.row, styles.spaceEvenly]}>
                  <CircularProgress size={60} strokeWidth={8} text1={'30'} text2={'level'} progressPercent={40} bgColor={'#F0F0F0'} pgColor={'#46D0D9'}/>
                  <View style={styles.spaceEvenly}>
                    <View style={[styles.chartDataRow, { width: '50%' }]}>
                      <Image
                        source={dollar}
                        height={16}
                        style={styles.dollarIcon}
                      />
                      <Text>10 {strings.salesComplete}</Text>
                    </View>
                    <View style={styles.chartDataRow}>
                      <Image
                        source={client}
                        height={16}
                        style={styles.dollarIcon}
                      />
                      <Text>09 {strings.clients}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.viewMoreInfoButton}>
                  {strings.moreInfo}
                </Text>
              </View>
              <View style={styles.findHomeCard}>
                <View style={styles.findHomeCardInner}>
                  <Text style={styles.findHomeCardTitle}>
                    {strings.information}
                  </Text>
                  <ScrollView>
                    <Text>
                      {strings.loremIpsum}
                    </Text>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.postsContainer}>
            <Text style={styles.postText}>{strings.post}</Text>
            {mockData
              .map((item) => (
                <Card key={item.name} item={item} />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default AccountScreen;
