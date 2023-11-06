import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ArrowBack, Call, FaceBook, Whatsapp } from '../../assets/Icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const DetailsScreen = () => {
    const navigation = useNavigation<any>()
    return (
        <>
            <SafeAreaView style={styles.Container} >
                <TouchableOpacity activeOpacity={.8} onPress={() => { navigation.replace('MainPage') }}>
                    <ArrowBack />
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image style={styles.CoverImage} source={{ uri: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80' }} />
                    <Text style={styles.Title}>Camp coding</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur. Sagittis consectetur sed lacus sem sed duis. Nisi imperdiet orci auctor amet lorem libero eu egestas. Non varius ut libero ullamcorper et enim faucibus nec vitae. Auctor sed elementum massa adipiscing eu. Eget convallis sem volutpat eu sapien pellentesqu Lorem ipsum dolor sit amet consectetur. Sagittis consectetur sed lacus sem sed duis. Nisi imperdiet orci auctor amet lorem libero eu egestas. Non varius ut libero ullamcorper et enim faucibus nec vitae. Auctor sed elementum massa adipiscing eu. Eget convallis sem volutpat eu sapien pellentesqu Lorem ipsum dolor sit amet consectetur. Sagittis consectetur sed lacus sem sed duis. Nisi imperdiet orci auctor amet lorem libero eu egestas. Non varius ut libero ullamcorper et enim faucibus nec vitae. Auctor sed elementum massa adipiscing eu. Eget convallis sem volutpat eu sapien pellentesqu Lorem ipsum dolor sit amet consectetur. Sagittis consectetur sed lacus sem sed duis. Nisi imperdiet orci auctor amet lorem libero eu egestas. Non varius ut libero ullamcorper et enim faucibus nec vitae. Auctor sed elementum massa adipiscing eu. Eget convallis sem volutpat eu sapien pellentesqu</Text>
                    <ImageBackground style={styles.MapImage} imageStyle={styles.MapImage2} resizeMode='cover' source={{ uri: 'https://www.google.com/maps/d/thumbnail?mid=13dyfDh6aco5nHpAFes4rB-FdOmA&hl=en_US' }}>
                        <Text style={styles.AddressText}>Egypt, Tanta, 20st othman</Text>
                    </ImageBackground>
                    <Text style={styles.ContactUsText}>Contact us</Text>
                    <View style={styles.IconsContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:+20 155 544 9098`)} activeOpacity={.8} style={{ marginRight: 25 }}>
                            <Call />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/campcoding')} activeOpacity={.8} style={{ marginRight: 25 }}>
                            <FaceBook />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=+201555449098')} activeOpacity={.8} style={{}}>
                            <Whatsapp />
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default DetailsScreen