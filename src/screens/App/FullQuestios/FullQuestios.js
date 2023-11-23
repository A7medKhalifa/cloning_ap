import { Exam } from 'assets/icons';
import { NoExams } from 'assets/lotties';
import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Card from './component/Card';
const FullQuestios = () => {
  return (
    <>
      <SafeAreaView style={styles.Container} edges={['top']}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          ListEmptyComponent={() => {
            return (
              <>
                <LottieView
                  autoPlay
                  source={NoExams}
                  style={styles.LottieView}
                />
                <Text style={styles.NoExam}>No Exams</Text>
              </>
            )
          }}
          renderItem={() => {
            return (
              <Card />
            )
          }}
        />


      </SafeAreaView>
    </>
  );
};
export default FullQuestios;
