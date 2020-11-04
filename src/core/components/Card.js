import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { CardStyles } from './styles';
import { locationPin, fullStar, emptyStar, bedrooms, bathrooms, kitchens } from '../themes';


const renderStars = (nrStars, votes) => {
    return (
        <View style={CardStyles.row}>
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
            <Text style={CardStyles.nrVotes}>({votes})</Text>
        </View>
    );
};
const renderRooms = (nrBedrooms, nrBathrooms, nrKitchens) => (
    <View
        style={[
            CardStyles.row,
            { justifyContent: 'space-between', alignItems: 'center' },
        ]}>
        <View style={[CardStyles.row, { alignItems: 'center' }]}>
            <Image source={bedrooms} style={CardStyles.roomIcon} />
            <Text>{nrBedrooms}</Text>
        </View>
        <View style={[CardStyles.row, { alignItems: 'center' }]}>
            <Image source={bathrooms} style={CardStyles.roomIcon} />
            <Text>{nrBathrooms}</Text>
        </View>
        <View style={[CardStyles.row, { alignItems: 'center' }]}>
            <Image source={kitchens} style={CardStyles.roomIcon} />
            <Text>{nrKitchens}</Text>
        </View>
    </View>
);

const Card = ({
    item
}) => {
    return (
        <ImageBackground
            imageStyle={CardStyles.cardImage}
            source={item.image}
            style={CardStyles.cardContent}>
            <View style={CardStyles.cardLocation}>
                <Image source={locationPin} height={13} />
                <Text style={CardStyles.locationText}>
                    {item.location}
                </Text>
            </View>
            <View style={CardStyles.cardDetailsContainer}>
                <Text style={CardStyles.cardDetailsTitle}>
                    {item.name}
                </Text>
                <View
                    style={[
                        CardStyles.row,
                        { justifyContent: 'space-between' },
                    ]}>
                    <View>
                        <View
                            style={[CardStyles.row, { alignItems: 'center' }]}>
                            <Image
                                source={item.user.image}
                                style={CardStyles.cardDetailsUserPic}
                            />
                            <Text>{item.user.name}</Text>
                        </View>
                        {renderStars(item.user.stars, item.reviews)}
                    </View>
                    <View>
                        <View>
                            <Text style={CardStyles.priceLabel}>
                                {item.price}
                            </Text>
                            {renderRooms(item.rooms.bedrooms, item.rooms.bathrooms, item.rooms.kitchens)}
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Card;