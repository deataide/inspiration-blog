import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Header from './components/Header';
import GlobalCss from './styles/globals/GlobalCss';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Private from './pages/Private';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<Private />} />
      </Routes>

      <Link to='/'>Home</Link>
      <Link to='/private'>Private</Link>

      <GlobalCss />
    </ThemeProvider>
  );
};

export default App;
