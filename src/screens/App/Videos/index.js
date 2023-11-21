import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import { styles } from './styles'
import Card from './components/Card'

const VideosScreen = () => {
  
    return (
        <>
            <SafeAreaView style={styles.Container} edges={['top']}>
                <Header />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.FlatListContainer}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={({ item }) => (
                        <Card />
                    )}
                />
            </SafeAreaView>
        </>
    )
}

export default VideosScreen