import { StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },
    LottieView: {
        height: 300,
        width: '100%'
    },
    NoExam: {
        textAlign: 'center',
        fontWeight: '600',
        color: colors.black,
        fontSize: 20
    },
    CardContainer: {
        padding: 20,
        backgroundColor: colors.Red,
        borderRadius: 20,
        marginBottom: 20
    },
    Logo: {
        position: 'absolute',
        right: 25,
        top: 25
    },
    CardTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: colors.white,
        marginBottom: 15
    },
    cardDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
        marginTop: 1
    }
})