import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeStyle } from '../styles'
import { useNavigation } from '@react-navigation/native'

const LectureCard = ({ img, index }) => {
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity activeOpacity={.8} onPress={()=>navigate('SubjectDetail')} style={HomeStyle.LectureCardContainer}>
            <Image style={HomeStyle.CardImage} source={{ uri: img }} />
            <View style={HomeStyle.con}>
                <Text style={HomeStyle.LectureTitle}>Math {`${index + 1}`}</Text>
                <Text numberOfLines={3} style={HomeStyle.describtion}>Lorem ipsum dolor sit amet consectetur. Sagittis consectetur sed lacus sem sed duis. Nisi imperdiet orci auctor amet lorem libero eu egestas. Non varius</Text>
                <Text style={HomeStyle.Date}>27 jan 2020</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LectureCard