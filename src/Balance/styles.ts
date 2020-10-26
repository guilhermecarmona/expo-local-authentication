import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

export const ThemeButton = styled(RectButton)`
  position: absolute;
  top: 32px;
  right: 32px;
`;

export const BalanceHeader = styled.Text`
  margin: 32px 0;
  font-family: 'Poppins-Regular';
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
`;

export const DisplayValues = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const DisplayText = styled.Text`
  margin-right: 16px;
  font-family: 'Poppins-Regular';
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
`;

export const BalanceText = styled.Text`
  margin-right: 16px;
  font-family: 'Poppins-Regular';
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.Image`
  margin-top: 54px;
  width: 67px;
  height: 64px;
`;

export const ExpensesContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 64px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: ${(props) => props.theme.colors.bgexpenses};
  padding: 32px;
`;

export const ExpensesHeader = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ExpensesItem = styled.View`
  margin-top: 32px;
  height: 60px;
  flex-direction: row;
  align-items: center;
`;

export const ExpenseDescription = styled.View`
  margin-left: 32px;
`;

export const ExpenseTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ExpenseDate = styled.Text`
  font-family: 'Poppins-Regular';
  color: ${(props) => props.theme.colors.tertiary};
`;

export const ExpenseValue = styled.Text`
  margin-left: auto;
  font-family: 'Poppins-Bold';
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Divider = styled.View`
  margin-top: 16px;
  width: 75%;
  height: 1px;
  background: ${(props) => props.theme.colors.tertiary};
  margin-left: 83px;
`;
