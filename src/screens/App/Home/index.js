import { View, Text, ScrollView, FlatList, } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import Header from './components/Header'
import { HomeStyle } from './styles'
import LiveCard from './components/LiveCard'
import LectureCard from './components/LectureCard'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    const img = 'https://cdn2.rsc.org.uk/sitefinity/images/education/resources/bbc-live-lessons_35658d9d-61b4-4c9d-9293-25780a684da8.tmb-img-912.jpg?sfvrsn=23db2021_2'
    return (
        <>
            <SafeAreaView edges={['top']} style={HomeStyle.Container}>
                <View style={HomeStyle.WhiteContainer}>
                    <Header />
                </View>
                <ScrollView style={HomeStyle.ScrollView}>
                    <LiveCard img={img} />

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 22,
                        marginBottom: 15
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                            color: colors.black
                        }}>Courses</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: colors.Red,
                            textDecorationLine: 'underline'
                        }}>See more</Text>
                    </View>
                    <FlatList
                        data={[{}, {}]}
                        style={{ marginBottom: 40 }}
                        renderItem={({ index }) => (
                            <LectureCard index={index} img={img} />
                        )}
                    />
                </ScrollView>
            </SafeAreaView >
        </>

    )
}

export default HomeScreen