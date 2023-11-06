import React from 'react'
import { FlatList } from 'react-native'
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from './components/Card';


const MainPage = () => {
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.FlatListStyle}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    renderItem={({ index, item }) => {
                        return (
                            <Card index={index} />
                        )
                    }}
                />
            </SafeAreaView>
        </>
    )
}

export default MainPage