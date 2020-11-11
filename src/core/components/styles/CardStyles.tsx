import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../themes/';

export default StyleSheet.create({
    cardImage: {
        borderRadius: metrics.size20,
    },
    row: {
        flexDirection: 'row',
    },
    nrVotes: {
        fontSize: metrics.size12,
        lineHeight: metrics.size14,
        color: colors.gallery,
        marginBottom: metrics.size10,
    },
    roomIcon: {
        marginRight: metrics.size4,
    },
    cardContent: {
        height: metrics.size400,
        justifyContent: 'space-between',
        margin: metrics.size20,
    },
    locationText: {
        fontSize: metrics.size11,
        fontWeight: 'bold',
        lineHeight: metrics.size13,
        color: colors.chathamsBlue,
        marginLeft: metrics.size4,
      },
    cardLocation: {
        height: metrics.size26,
        backgroundColor: 'rgba(255, 255, 255, 0.66)',
        borderRadius: metrics.size50,
        width: metrics.size130,
        margin: metrics.size26,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetailsContainer: {
        width: '100%',
        height: metrics.size103,
        backgroundColor: 'white',
        borderRadius: metrics.size20,
        paddingVertical: metrics.size15,
        paddingHorizontal: metrics.size27,
    },
    cardDetailsTitle: {
        marginBottom: metrics.size9,
        fontSize: metrics.size20,
        color: colors.blueZodiac,
    },
    cardDetailsUserPic: {
        borderRadius: metrics.size30,
        height: metrics.size30,
        width: metrics.size30,
    },
    priceLabel: {
        fontSize: metrics.size20,
        lineHeight: metrics.size24,
        color: colors.blueZodiac,
        fontWeight: 'bold',
        marginRight: metrics.size35,
    },
    marginRightRooms: {
        marginRight: metrics.size16
    }
})