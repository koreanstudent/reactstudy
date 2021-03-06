import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColors';

// Provider를 사용하면 Context의 value를 변경할 수 있다.
// Provider를 사용할 때는 value 값을 명시해 주어야 제대로 작동한다
const App = () => {
  return(
    <ColorProvider>

    <div>
      <SelectColors></SelectColors>
      <ColorBox/>
    </div>
    </ColorProvider>
  )
}
export default App;
