import React, { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { ThemeProvider, DefaultTheme } from 'styled-components';


import { LightTheme } from './styles/themes/light';
import { DarkTheme } from './styles/themes/dark';
import { Buttons } from './pages/StyleGuide/Buttons';
import { InputTexts } from './pages/StyleGuide/InputTexts';
import { Login } from './pages/Login';




function App() {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

  function handleToggleTheme(){
     setTheme( theme === LightTheme ? DarkTheme : LightTheme);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        { /*<Buttons toggleTheme={handleToggleTheme} /> */}
        <Login />
      </div>    
    </ThemeProvider>
  );
  
}

export default App;