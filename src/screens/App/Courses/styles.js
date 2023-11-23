import { Platform, StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const HomeStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.secblack,
    },
    WhiteContainer: {
        backgroundColor: colors.white
    },
    HeaderContainer: {
        backgroundColor: colors.secblack,
        paddingVertical: 15,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    HeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    HelloText: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.white
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.Red,
        marginTop: 5
    },
    SearchContainer: {
        width: '85%',
        backgroundColor: colors.white,
        height: 40,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 15,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    Input: {
        width: '90%',
        height: 40,
        color: colors.secblack,
        fontWeight: '600'
    },
    ScrollView: {
        backgroundColor: colors.white,
        paddingHorizontal: 25
    },
    ImageBackgroundStyle: {
        width: '100%',
        height: 170,
        marginTop: 25
    },
    ShadowImage:{
        width: '100%',
        height: '100%',
        backgroundColor: '#18181880',
        borderRadius: 20,
        padding: 15,
        justifyContent: 'space-between'
    },
    Row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    LiveText:{
        color: '#fff',
        fontWeight: '700',
    },
    LectureCardContainer:{
        backgroundColor: colors.lwhite,
        marginBottom: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row'
    },
    LectureTitle:{
        fontSize: 18,
        color: colors.secblack,
        fontWeight: '700'
    },
    CardImage:{
        height: 120,
        width: 100,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        resizeMode: 'stretch',
        marginRight: 10
    },
    con:{
        paddingVertical: 10,
        justifyContent: 'space-between',
        width: '65%'
    },
    describtion:{
        fontSize: 13,
        color: colors.secblack,
        fontWeight: '400'
    },
    Date:{
        fontSize: 10,
        color: colors.Red,
        fontWeight: '700',
        textAlign: 'right'
    }
})