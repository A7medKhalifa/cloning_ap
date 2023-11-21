import React from 'react';
import { Formik } from 'formik';
import { regist_initial_values } from 'src/Formik/initialValues';
import { RegistSchema } from 'src/Formik/schema';
import Input from 'components/Input';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../style';
import { Arrow, Logo } from 'assets/icons';
import Button from 'components/Button';
import { useNavigation } from '@react-navigation/native';


function Form() {
  const { goBack } = useNavigation()
  return (
    <Formik
      initialValues={regist_initial_values}
      validationSchema={RegistSchema}
      onSubmit={values => {
        alert(JSON.stringify(values))
      }}>
      {props => (
        <>
          <TouchableOpacity onPress={() => { goBack() }} activeOpacity={.9} style={styles.Row}>
            <Arrow />
            <Text style={styles.Title}>Create new account</Text>
          </TouchableOpacity>
          <View style={styles.InputsContainer}>
            <Logo height={70} style={{
              alignSelf: 'center',
              marginVertical: 20
            }} />
            <Input
              {...props}
              Label="Full name"
              placeholder="Enter your full name"
            />
            <Input
              {...props}
              Label="E-mail"
              placeholder="Enter your e-mail address"
            />
            <Input
              {...props}
              Label="Phone number"
              placeholder="Enter your e-mail address"
            />
            <Input
              {...props}
              secureTextEntry
              Label="Password"
              placeholder="Enter your password"
            />
            <Input
              {...props}
              secureTextEntry
              Label="Confirm password"
              placeholder="Enter your confirm password"
            />

            <Button
              fill
              title="Create account"
              style={styles.Button}
              onPress={() => props.handleSubmit()}
            />

          </View>
        </>
      )}
    </Formik>
  );
}

export default Form;
