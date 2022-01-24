import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from 'components';
import { lazy, Suspense, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from 'theme';
import Home from './pages/Home';

const Favorites = lazy(() => import('./pages/Favorites'));
const Basket = lazy(() => import('./pages/Basket'));

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<>yükleniyor</>}>
                <Favorites />
              </Suspense>
            }
          />
          <Route
            path="/basket"
            element={
              <Suspense fallback={<>yükleniyor</>}>
                <Basket />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
