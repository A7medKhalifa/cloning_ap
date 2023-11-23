import { View, Text, FlatList } from 'react-native'
import React from 'react'
import LectureCard from './components/LectureCard'

const Courses = () => {
    const img = 'https://cdn2.rsc.org.uk/sitefinity/images/education/resources/bbc-live-lessons_35658d9d-61b4-4c9d-9293-25780a684da8.tmb-img-912.jpg?sfvrsn=23db2021_2'
    return (
        <View style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            flex: 1
        }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[{}, {}, {}, {}, {}, {}]}
                // style={{ marginTop: 40 }}
                renderItem={({ index }) => (
                    <LectureCard index={index} img={img} />
                )}
            />
        </View>

    )
}

export default Courses