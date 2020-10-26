import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import FiIcon from 'react-native-vector-icons/Feather';
import {DefaultTheme, ThemeContext} from 'styled-components';

import logoImg from '../assets/logo.png';

import lightTheme from '../styles/theme/light';
import darkTheme from '../styles/theme/dark';
import {
  Container,
  ThemeButton,
  Logo,
  BalanceHeader,
  DisplayValues,
  DisplayText,
  BalanceText,
  ExpensesContainer,
  ExpensesHeader,
  ExpensesItem,
  ExpenseDescription,
  ExpenseTitle,
  ExpenseDate,
  ExpenseValue,
  Divider,
} from './styles';

interface BalanceProps {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

interface ExpensesItem {
  id: number;
  icon: string;
  title: string;
  date: string;
  value: string;
  last?: boolean;
}

const Balance: React.FC<BalanceProps> = ({setTheme}) => {
  const [displayValues, setDisplayValues] = useState(false);
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    async function checkDeviceForHardware() {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) Alert.alert('Device does not support biometrics');

      const biometricInfo = await LocalAuthentication.isEnrolledAsync();
      if (!biometricInfo) Alert.alert('No biometrics register found');

      const supportedAuthTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    checkDeviceForHardware();
  }, []);

  const handleLoginPress = useCallback(async () => {
    if (displayValues) {
      setDisplayValues(false);
      return;
    }
    const authReturn = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Please authenticate',
      disableDeviceFallback: true,
      cancelLabel: 'Cancel',
    });
    if (authReturn && authReturn.success) {
      setDisplayValues(true);
    }
  }, [displayValues]);

  const changeThemeHandler = useCallback(() => {
    if (themeContext.title === 'dark') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [themeContext.title]);

  const expensesItems: ExpensesItem[] = [
    {
      id: 0,
      icon: 'local-taxi',
      title: 'Taxi',
      date: '05 oct, 10:52 pm',
      value: '120.31',
    },
    {
      id: 1,
      icon: 'restaurant-menu',
      title: 'Restaurant',
      date: '29 sep, 09:31 pm',
      value: '97.20',
    },
    {
      id: 2,
      icon: 'flight',
      title: 'Travel',
      date: '17 sep, 8:10 am',
      value: '1321.57',
      last: true,
    },
  ];

  return (
    <Container>
      <ThemeButton onPress={changeThemeHandler}>
        <FiIcon
          name={themeContext.title === 'dark' ? 'sun' : 'moon'}
          size={20}
          color={themeContext.colors.primary}
        />
      </ThemeButton>
      <Logo source={logoImg} />
      <BalanceHeader>Balance</BalanceHeader>
      <DisplayValues onPress={() => handleLoginPress()}>
        {!displayValues ? (
          <>
            <DisplayText>Display values</DisplayText>
          </>
        ) : (
          <BalanceText>$ 5420.00</BalanceText>
        )}
        <MdIcon
          name={displayValues ? 'visibility-off' : 'visibility'}
          size={20}
          color={themeContext.colors.primary}
        />
      </DisplayValues>
      <ExpensesContainer>
        <ExpensesHeader>Recent expenses</ExpensesHeader>
        {expensesItems.map((item) => (
          <View key={item.id}>
            <ExpensesItem>
              <MdIcon
                name={item.icon}
                size={50}
                color={themeContext.colors.secondary}
              />
              <ExpenseDescription>
                <ExpenseTitle>{item.title}</ExpenseTitle>
                <ExpenseDate>{item.date}</ExpenseDate>
              </ExpenseDescription>
              <ExpenseValue>
                $ {displayValues ? `${item.value}` : '-'}
              </ExpenseValue>
            </ExpensesItem>
            {!item.last && <Divider />}
          </View>
        ))}
      </ExpensesContainer>
    </Container>
  );
};

export default Balance;
