import React, { useState } from 'react';
import { View, Image, Text, SafeAreaView, ImageBackground } from 'react-native';
import {
  userPic,
  userPic2,
  userPic3,
  userPic4,
  locationPin,
  fullStar,
  emptyStar,
  post1,
  post2,
  post3,
  post4,
  arrowDown,
  notificationBell,
  settings,
  menu,
  btn1,
  btn2,
  btn3,
  btn4
} from '../../core/themes';
import { strings } from '../../core/constants'
import styles from './styles/styles';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Card, FieldInput } from '../../core/components';



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

const renderButtons = (btnArray, setButtons) => {
  return btnArray.map((item, index) => (
    <TouchableOpacity onPress={() => {
      let tempArr = [...btnArray];
      tempArr.map((item2, index2) => index2 === index ? item2.selected = true : item2.selected = false);
      setButtons(tempArr);
    }} style={item.selected ? styles.selectedButtonContainer : styles.buttonContainer}>
      <Image source={item.img} style={item.selected ? styles.selectedButton : styles.button} />
      {item.selected && <Text style={styles.buttonText}>{item.name}</Text>}
    </TouchableOpacity>
  ))
}

const HomeFigma = ({ navigation }) => {
  const [buttons, setButtons] = useState([
    {
      selected: true,
      name: 'Home',
      img: btn1
    },
    {
      selected: false,
      name: 'House',
      img: btn2
    },
    {
      selected: false,
      name: 'Keys',
      img: btn3
    },
    {
      selected: false,
      name: 'Offer',
      img: btn4
    }
  ]);
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.rootScroll}>

        <View style={styles.userView}>

          <Image source={currentUser.image} style={styles.userImage} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={locationPin} style={styles.locationPin} />
            <Text style={styles.locationText}>{currentUser.location}</Text>
            <Image style={styles.arrowDownIcon} source={arrowDown} />
          </View>
          <Image style={styles.notificationBellIcon} source={notificationBell} />
          <Image style={styles.settingsIcon} source={settings} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.nameText}>{strings.hello} {currentUser.name}!</Text>
          <Text style={styles.startLookingText}>{strings.startLookingForYourHouse}</Text>
          <View style={styles.searchContainer}>
            <FieldInput
              placeholder={'What are you looking for'}
              leftIconName={'search'}
              rightIconName={'sort'}
              iconColor={'#13497B60'}
              onChangeValue={() => { }}
              autoCapitalize={strings.none}
              autoCompleteType={'email'}
              autoCorrect={false}
              placeholderColor={'#13497B60'}
            />

          </View>
          <ScrollView horizontal={true} style={styles.buttonsContainer}>
            {renderButtons(buttons, setButtons)}
          </ScrollView>

          <View style={styles.postsContainer}>
            {mockData
              .map((item) => (
                <Card key={item.name} item={item} />
              ))}
          </View>
        </View>
      </ScrollView>
      <Image source={menu} containMode={'resize'} />
    </SafeAreaView>
  );
};


export default HomeFigma;
