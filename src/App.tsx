import 'react-native-gesture-handler';
import React, {useMemo, useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import darkTheme from './styles/theme/dark';
import Balance from './Balance';

const App: React.FC = () => {
  const [theme, setTheme] = useState(darkTheme);
  const barStyleTheme = useMemo(() => {
    return theme.title === 'dark' ? 'light-content' : 'dark-content';
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={barStyleTheme}
        backgroundColor={theme.colors.background}
      />
      <Balance setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
