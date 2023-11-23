import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'
import { AppLogo } from 'assets/Images'

const SplashScreen = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingHorizontal:20
        }}>
            <Image
                source={AppLogo}
                style={{
                    height: '100%',
                    width: '100%',
                    resizeMode:'contain'
                }}
            />
        </SafeAreaView>
    )
}

export default SplashScreen