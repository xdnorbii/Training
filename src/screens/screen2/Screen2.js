import React, {} from 'react';
import {View, Image, Text, SafeAreaView, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {LOGIN_SAGA} from './redux';
import {
  userPic,
  locationPin,
  fullStar,
  emptyStar,
  back,
  chart,
  client,
  dollar,
  post1,
  bedrooms,
  kitchens,
  bathrooms,
} from '../../core/themes';
import {Screen2Styles} from './styles';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const renderStars = votes => {
  return (
    <View style={Screen2Styles.row}>
      {Array(4)
        .fill(0)
        .map(() => (
          <Image source={fullStar} height={19} width={19} />
        ))}
      <Image source={emptyStar} height={19} width={19} />
      <Text style={Screen2Styles.nrVotes}>({votes})</Text>
    </View>
  );
};

const renderRooms = (nrBedrooms, nrBathrooms, nrKitchens) => (
  <View
    style={[
      Screen2Styles.row,
      {justifyContent: 'space-between', alignItems: 'center'},
    ]}>
    <View style={[Screen2Styles.row, {alignItems: 'center'}]}>
      <Image source={bedrooms} style={Screen2Styles.roomIcon} />
      <Text>{nrBedrooms}</Text>
    </View>
    <View style={[Screen2Styles.row, {alignItems: 'center'}]}>
      <Image source={bathrooms} style={Screen2Styles.roomIcon} />
      <Text>{nrBathrooms}</Text>
    </View>
    <View style={[Screen2Styles.row, {alignItems: 'center'}]}>
      <Image source={kitchens} style={Screen2Styles.roomIcon} />
      <Text>{nrKitchens}</Text>
    </View>
  </View>
);

const Screen2 = () => {
  return (
    <SafeAreaView style={Screen2Styles.root}>
      <ScrollView style={Screen2Styles.rootScroll}>
        <TouchableOpacity style={Screen2Styles.backButton}>
          <Image source={back} height={16} />
        </TouchableOpacity>
        <View style={Screen2Styles.userView}>
          <View style={Screen2Styles.userDetails}>
            <Text style={Screen2Styles.nameText}>Eddie bremmer</Text>
            <View>{renderStars(10)}</View>
            <View style={[Screen2Styles.row, {width: 100}]}>
              <Image source={locationPin} height={20} />
              <Text style={Screen2Styles.locationText}>Los Angeles</Text>
            </View>
          </View>
          <Image source={userPic} style={Screen2Styles.userImage} />
        </View>
        <View style={Screen2Styles.contentContainer}>
          <View style={Screen2Styles.findHomeView}>
            <Text style={Screen2Styles.findHomeText}>FindHome Gold</Text>
            <ScrollView
              style={Screen2Styles.findHomeScrollView}
              horizontal={true}>
              <View style={Screen2Styles.findHomeCard}>
                <Text style={Screen2Styles.findHomeCardTitle}>Estadistics</Text>
                <View style={[Screen2Styles.row, Screen2Styles.spaceEvenly]}>
                  <Image
                    source={chart}
                    height={62}
                    style={Screen2Styles.chartIcon}
                  />
                  <View style={Screen2Styles.spaceEvenly}>
                    <View style={[Screen2Styles.chartDataRow, {width: '50%'}]}>
                      <Image
                        source={dollar}
                        height={16}
                        style={Screen2Styles.dollarIcon}
                      />
                      <Text>10 sales Complete</Text>
                    </View>
                    <View style={Screen2Styles.chartDataRow}>
                      <Image
                        source={client}
                        height={16}
                        style={Screen2Styles.dollarIcon}
                      />
                      <Text>09 clients</Text>
                    </View>
                  </View>
                </View>
                <Text style={Screen2Styles.viewMoreInfoButton}>
                  View more info
                </Text>
              </View>
              <View style={Screen2Styles.findHomeCard}>
                <View style={Screen2Styles.findHomeCardInner}>
                  <Text style={Screen2Styles.findHomeCardTitle}>
                    Information
                  </Text>
                  <ScrollView>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Risus condimentum nulla diam proin quis commodo malesuada.
                      Dolor morbi egestas consectetur egestas aliquam tellus.
                      Accumsan tristique consequat nec cras commodo et orci
                      ipsum.
                    </Text>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={Screen2Styles.postsContainer}>
            <Text style={Screen2Styles.postText}>Post</Text>
            {Array(4)
              .fill(0)
              .map(() => (
                <ImageBackground
                  imageStyle={Screen2Styles.cardImage}
                  source={post1}
                  style={Screen2Styles.cardContent}>
                  <View style={Screen2Styles.cardLocation}>
                    <Image source={locationPin} height={13} />
                    <Text style={Screen2Styles.locationText}>
                      Los Angeles, CA
                    </Text>
                  </View>
                  <View style={Screen2Styles.cardDetailsContainer}>
                    <Text style={Screen2Styles.cardDetailsTitle}>
                      Special House mix
                    </Text>
                    <View
                      style={[
                        Screen2Styles.row,
                        {justifyContent: 'space-between'},
                      ]}>
                      <View>
                        <View
                          style={[Screen2Styles.row, {alignItems: 'center'}]}>
                          <Image
                            source={userPic}
                            style={Screen2Styles.cardDetailsUserPic}
                          />
                          <Text>Timmy bremor</Text>
                        </View>
                        {renderStars(10)}
                      </View>
                      <View>
                        <View>
                          <Text style={Screen2Styles.priceLabel}>
                            $1500 usd
                          </Text>
                          {renderRooms(2, 1, 1)}
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  const {message, isFetchingToken} = state.login.loginReducer;
  return {message, isFetchingToken};
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({type: LOGIN_SAGA}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen2);
