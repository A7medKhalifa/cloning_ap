import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    CoverImage: {
        width: '100%',
        height: 200,
        marginTop: 15,
        resizeMode: 'stretch'
    },
    Title: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        fontSize: 13,
        fontWeight: '500',
        color: 'black',
    },
    MapImage: {
        height: 150,
        width: 290,
        alignSelf: 'center',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    MapImage2: {
        alignSelf: 'center',
        borderRadius: 10
    },
    AddressText: {
        fontSize: 16,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center'
    },
    ContactUsText: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15
    },
    IconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 30
    }
})