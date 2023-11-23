import { View, Text } from 'react-native'
import React from 'react'
import { Exam } from 'assets/icons'
import { styles } from '../styles'

const Card = () => {
    return (
        <View style={styles.CardContainer}>
            <Exam height={80} width={80} style={styles.Logo} />
            <Text style={styles.CardTitle}>First Exam !</Text>
            <Text style={styles.cardDescription}>Topic: Example exam</Text>
            <Text style={styles.cardDescription}>Time Allowed: 30 min</Text>
            <Text style={styles.cardDescription}>Deadline: Thu, Nov 10 ,2023</Text>
        </View>
    )
}

export default Card