import { FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import Header from './components/Header'
import LectureCard from './components/LectureCard'

const CoursesListScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            {/* <Header /> */}
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: -20 }}
                columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 15 }}
                data={[{}, {}, {}, {}, {}, {}, {}, {}]}
                renderItem={({ index }) => (
                    <LectureCard index={index} />
                )}
            />
        </SafeAreaView>
    )
}

export default CoursesListScreen