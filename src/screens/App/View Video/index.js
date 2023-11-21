import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { colors } from 'theme/colors'
const { width, height } = Dimensions.get('window');

const ViewVideoScreen = () => {
    let translateY = Math.floor(
        Math.random() * (height - 40 - 0 + 1) + 0,
    );

    let translatex = Math.floor(
        Math.random() * (width - 160 - 0 + 1) + 0,
    );
//     const jscode = `
//     if (document.getElementsByClassName('js-password') == null) {
//         // field not existing, deal with the error
//       } else {
//         document.getElementsByClassName('js-password')[0].value = '${encLet}';
//         document.querySelector("input[type='submit']").click();
//       }
//   `;

    const [moveingIdLeft, setMoveingIdLeft] = React.useState(0)
    const [moveingIdUp, setMoveingIdUp] = React.useState(0)


    useEffect(() => {
        setInterval(() => {
            setMoveingIdLeft(translateY)
            setMoveingIdUp(translatex)
        }, 5000)
    }, [])

    return (
        <SafeAreaView edges={['top']}>
            <WebView
                style={{
                    width: '100%',
                    height: '100%',
                }}
                source={{
                    uri: `https://player.vimeo.com/video/sadas`,
                }}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: 60,
                    left: 5
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        
                    }}
                    style={{
                        paddingHorizontal: 25,
                        backgroundColor: colors.Red,
                        paddingVertical: 12, borderRadius: 25,
                        marginRight: 5

                    }}>
                    <Text
                        style={{
                            color: "#ffffff"
                        }}
                    >Sheet</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        // console.log(this.state.videoDetails)
                        // this.backHandler.remove();
                        // Orientation.lockToPortrait()
                        // this.props.navigation.navigate('VideoComment', {
                        //     type: "video",
                        //     video_id: this.state.videoDetails.video_id
                        // });
                    }}
                    style={{
                        // position:"absolute"
                        paddingHorizontal: 25,
                        backgroundColor: colors.Red,
                        paddingVertical: 12, borderRadius: 25,
                        marginRight: 5

                    }}>
                    <Text
                        style={{
                            color: "#ffffff"
                        }}
                    >
                        Comments
                    </Text>

                </TouchableOpacity>

                <View
                    style={{
                        position: 'absolute',
                        top: moveingIdUp,
                        left: moveingIdLeft,
                        paddingHorizontal: 10,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: '#fff', }}>
                        {'1'} : {'ahmedd'}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ViewVideoScreen