import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from 'components/Button'
import { styles } from '../styles'

const Card = () => {
    const img = 'https://cdn2.rsc.org.uk/sitefinity/images/education/resources/bbc-live-lessons_35658d9d-61b4-4c9d-9293-25780a684da8.tmb-img-912.jpg?sfvrsn=23db2021_2'
    return (
        <View style={styles.CardContainer}>
            <Image source={{ uri: img }} style={styles.Image} />
            <View style={styles.Row}>
                <Text numberOfLines={2} style={styles.videoTitle}>1. Let's start </Text>
                <Button style={styles.WatchButton} fill title='Watch' />
            </View>
        </View>
    )
}

export default Card