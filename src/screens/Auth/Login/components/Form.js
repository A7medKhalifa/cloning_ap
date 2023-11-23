import React from 'react';
import { Formik } from 'formik';
import { login_initial_values } from 'src/Formik/initialValues';
import { LoginSchema } from 'src/Formik/schema';
import Input from 'components/Input';
import { Image, Text, View } from 'react-native';
import { styles } from '../style';
import { Apple, FaceBook, Google } from 'assets/icons';
import Button from 'components/Button';
import SocialIcon from './Social';
import { useNavigation } from '@react-navigation/native';
import { Logo } from 'assets/Images';


function Form() {
  const { navigate } = useNavigation()
  return (
    <Formik
      initialValues={login_initial_values}
      validationSchema={LoginSchema}
      onSubmit={values => {
        alert(navigate('App'))
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <Image style={styles.Logo} source={Logo} />
            <Input
              {...props}
              Label="E-mail"
              placeholder="Enter your e-mail address"
            />
            <Input
              {...props}
              secureTextEntry
              Label="Password"
              placeholder="Enter your password"
            />

            <Text onPress={() => { navigate('ForgetPassword') }} style={styles.ForgotPassword}>Forgot password?</Text>

            <Button fill title="Login" onPress={() => props.handleSubmit()} />
            <Text onPress={() => { navigate('Regist') }} style={styles.CreateNewText}>Create new account</Text>
            <Text style={styles.SocialText}>Or register by social media</Text>

            <View style={styles.SocialContainer}>
              <SocialIcon Icon={Apple} loading={false} onPress={() => { }} />
              <SocialIcon Icon={FaceBook} loading={false} onPress={() => { }} />
              <SocialIcon Icon={Google} loading={false} onPress={() => { }} />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
}

export default Form;
