import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FullQuestios from 'screens/App/FullQuestios/FullQuestios';
import PdfViewer from 'screens/App/PdfViewer/PdfViewer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from 'theme/colors';
import CoursesListScreen from 'screens/App/Courses List';
import Courses from 'screens/App/Courses';
const Tab = createMaterialTopTabNavigator();
const TopBar = () => {
  return (
    <SafeAreaView edges={['top']} style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          options={{
            title: ' Exams',
          }}
          name="FullQuestios"
          component={FullQuestios}
        />
        <Tab.Screen
          options={{
            title: 'MCQ',
          }}
          name="Courses"
          component={Courses}
        />
      </Tab.Navigator>
    </SafeAreaView>

  );
};
export default TopBar;
