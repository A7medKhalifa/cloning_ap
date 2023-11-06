import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    FlatListStyle: {
        paddingBottom: 30
    },
    CardContainer: {
        width: '90%',
        alignSelf: 'center',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    CardImage: {
        height: '100%',
        width: '35%',
        resizeMode: 'cover'
    },
    CardTextContainer: {
        width: '65%',
        height: '100%',
        paddingLeft: 10,
        justifyContent: 'center'
    },
    Title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    describtion: {
        fontSize: 10,
        fontWeight: '500',
        color: '#000'
    }
})