import React from 'react'
import * as Animatable from 'react-native-animatable';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

const Card = ({ index }: { index?: any }) => {
    const { navigate } = useNavigation<any>()
    return (
        <>
            <TouchableOpacity activeOpacity={.8} onPress={() => { navigate('Details') }}>
                <Animatable.View duration={2500} animation={index % 2 == 1 ? "bounceInRight" : 'bounceInLeft'} style={styles.CardContainer}>
                    <Image style={styles.CardImage} source={{ uri: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80' }} />
                    <View style={styles.CardTextContainer}>
                        <Text style={styles.Title}>Camp Coding</Text>
                        <Text numberOfLines={2} style={styles.describtion}>About Camp Coding About Camp CodingAbout Camp Coding</Text>
                    </View>
                </Animatable.View>
            </TouchableOpacity>

        </>
    )
}

export default Card