import React, { } from 'react';
import { View, Image, Text, SafeAreaView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { LOGIN_SAGA } from './redux';
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
  strings
} from '../../core/themes';
import { Screen2Styles } from './styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Card from '../../core/components/Card';

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
    <View style={Screen2Styles.row}>
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
      <Text style={Screen2Styles.nrVotes}>({votes})</Text>
    </View>
  );
};

const Screen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={Screen2Styles.root}>
      <ScrollView style={Screen2Styles.rootScroll}>
        <TouchableOpacity style={Screen2Styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={back} height={16} />
        </TouchableOpacity>
        <View style={Screen2Styles.userView}>
          <View style={Screen2Styles.userDetails}>
            <Text style={Screen2Styles.nameText}>{currentUser.name}</Text>
            <View>{renderStars(currentUser.stars, currentUser.reviews)}</View>
            <View style={[Screen2Styles.row, { width: 100 }]}>
              <Image source={locationPin} height={20} />
              <Text style={Screen2Styles.locationText}>{currentUser.location}</Text>
            </View>
          </View>
          <Image source={currentUser.image} style={Screen2Styles.userImage} />
        </View>
        <View style={Screen2Styles.contentContainer}>
          <View style={Screen2Styles.findHomeView}>
            <Text style={Screen2Styles.findHomeText}>{strings.findHomeGold}</Text>
            <ScrollView
              style={Screen2Styles.findHomeScrollView}
              horizontal={true}>
              <View style={Screen2Styles.findHomeCard}>
                <Text style={Screen2Styles.findHomeCardTitle}>{strings.estadistics}</Text>
                <View style={[Screen2Styles.row, Screen2Styles.spaceEvenly]}>
                  <Image
                    source={chart}
                    height={62}
                    style={Screen2Styles.chartIcon}
                  />
                  <View style={Screen2Styles.spaceEvenly}>
                    <View style={[Screen2Styles.chartDataRow, { width: '50%' }]}>
                      <Image
                        source={dollar}
                        height={16}
                        style={Screen2Styles.dollarIcon}
                      />
                      <Text>10 {strings.salesComplete}</Text>
                    </View>
                    <View style={Screen2Styles.chartDataRow}>
                      <Image
                        source={client}
                        height={16}
                        style={Screen2Styles.dollarIcon}
                      />
                      <Text>09 {strings.clients}</Text>
                    </View>
                  </View>
                </View>
                <Text style={Screen2Styles.viewMoreInfoButton}>
                  {strings.moreInfo}
                </Text>
              </View>
              <View style={Screen2Styles.findHomeCard}>
                <View style={Screen2Styles.findHomeCardInner}>
                  <Text style={Screen2Styles.findHomeCardTitle}>
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

          <View style={Screen2Styles.postsContainer}>
            <Text style={Screen2Styles.postText}>{strings.post}</Text>
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

const mapStateToProps = state => {
  const { message, isFetchingToken } = state.login.loginReducer;
  return { message, isFetchingToken };
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: LOGIN_SAGA }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen2);
