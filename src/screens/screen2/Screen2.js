import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { LOGIN_SAGA } from './redux';
import { FieldInput } from '../../core/components';
import { userPic, locationPin, fullStar, emptyStar, back, chart, client, dollar, post1, bedrooms, kitchens, bathrooms } from '../../core/themes';
import { Screen2Styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const renderStars = (votes) => {
  return (
    <View style={Screen2Styles.row}>
      {Array(4).fill(0).map(() => (
        <Image source={fullStar} height={19} width={19} />
      ))}
      <Image source={emptyStar} height={19} width={19} />
      <Text style={Screen2Styles.nrVotes}>({votes})</Text>
    </View>
  )
}

const renderRooms = (nrBedrooms, nrBathrooms, nrKitchens) => (
  <View style={[Screen2Styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
    <View style={[Screen2Styles.row,{alignItems:'center'}]}>
      <Image source={bedrooms} />
      <Text>{nrBedrooms}</Text>
    </View>
    <View style={[Screen2Styles.row,{alignItems:'center'}]}>
      <Image source={bathrooms} />
      <Text>{nrBathrooms}</Text>
    </View>
    <View style={[Screen2Styles.row,{alignItems:'center'}]}>
      <Image source={kitchens} />
      <Text>{nrKitchens}</Text>
    </View>
  </View>
)

const Screen2 = ({ login, message, isFetchingToken }) => {
  return (
    <SafeAreaView style={Screen2Styles.root}>
      <ScrollView style={Screen2Styles.rootScroll}>
        <TouchableOpacity style={Screen2Styles.backButton}>
          <Image source={back} height={16} />
        </TouchableOpacity>
        <View style={Screen2Styles.userView}>
          <View style={Screen2Styles.userDetails}>
            <Text style={Screen2Styles.nameText}>Eddie bremmer</Text>
            <View>
              {renderStars(10)}
            </View>
            <View style={Screen2Styles.row}>
              <Image source={locationPin} height={20} />
              <Text style={Screen2Styles.locationText}>Los Angeles</Text>
            </View>
          </View>
          <Image source={userPic} style={Screen2Styles.userImage} />
        </View>
        <View style={Screen2Styles.contentContainer}>
          <View style={Screen2Styles.findHomeView}>
            <Text style={Screen2Styles.findHomeText}>FindHome Gold</Text>
            <ScrollView style={Screen2Styles.findHomeScrollView} horizontal={true}>
              <View style={Screen2Styles.findHomeCard}>
                <Text style={Screen2Styles.findHomeCardTitle}>Estadistics</Text>
                <View style={[Screen2Styles.row, Screen2Styles.spaceEvenly]}>
                  <Image source={chart} height={62} style={{ marginLeft: 26 }} />
                  <View style={Screen2Styles.spaceEvenly}>
                    <View style={[Screen2Styles.row, { marginLeft: 28,width:'50%' }]}>
                      <Image source={dollar} height={16} style={{ marginRight: 11 }} />
                      <Text style={{ flexWrap: 'wrap' }}>10 sales Complete</Text>
                    </View>
                    <View style={[Screen2Styles.row, { flexWrap: 'wrap', marginLeft: 28 }]}>
                      <Image source={client} height={16} style={{ marginRight: 11 }} />
                      <Text>09 clients</Text>
                    </View>
                  </View>
                </View>
                <Text style={{color:'#46D0D9', fontSize:8, lineHeight:10, fontWeight:'300'}}>View more info</Text>
              </View>
              <View style={Screen2Styles.findHomeCard}>
                <View style={{ padding: 17 }}>
                  <Text style={Screen2Styles.findHomeCardTitle}>Information</Text>
                  <ScrollView>
                    <Text style={{ flexWrap: 'wrap' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus condimentum nulla diam proin quis commodo malesuada. Dolor morbi egestas consectetur egestas aliquam tellus. Accumsan tristique consequat nec cras commodo et orci ipsum.</Text>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={Screen2Styles.postsContainer}>
            <Text style={{ fontSize: 20, lineHeight: 23, color: '#143656', marginLeft: 20 }}>Post</Text>
            {Array(4).fill(0).map(()=>(
              <ImageBackground imageStyle={{ borderRadius: 20 }} source={post1} style={{ height: 400, justifyContent: 'space-between', margin: 20 }}>
              <View style={{ height: 26, backgroundColor: 'rgba(255, 255, 255, 0.66)', borderRadius: 50, width: 130, margin: 26, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={locationPin} height={13} />
                <Text>Los Angeles, CA</Text>
              </View>
              <View style={{ width: '100%', height: 103, backgroundColor: 'white', borderRadius: 20, paddingVertical: 15, paddingHorizontal: 27 }}>
                <Text style={{ marginBottom: 9, fontSize: 20, color: '#143656' }}>Special House mix</Text>
                <View style={[Screen2Styles.row, { justifyContent: 'space-between' }]}>
                  <View>
                    <View style={Screen2Styles.row}>
                      <Image source={userPic} style={{ borderRadius: 30, height: 30, width: 30 }} />
                      <Text>Timmy bremor</Text>
                    </View>
                    {renderStars(10)}
                  </View>
                  <View>
                    <View>
                      <Text style={{fontSize:20, lineHeight:24, color:'#143656', fontWeight:'500'}}>$1500 usd</Text>
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
