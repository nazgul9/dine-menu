import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../component/g/Home'
import Burger from '../component/burger/Burger'
import Desert from '../component/desert/Desert'
import Napitki from '../component/napitki/Napitki'
import GRool from '../component/gRoll/GRool'
import HRool from '../component/hrool/HRool'
import Krylyshki from '../component/krylyshky/Krylyshki'
import NasiBlud from '../component/nasiblud/NasiBlud'
import Pizza from '../component/pizza/Pizza'
import Salad from '../component/salad/Salad'
import Shaurma from '../component/shaurma/Shaurma'
import Soci from '../component/sociJuice/Soci'
import Sous from '../component/sous/Sous'
import Wok from '../component/wok/Wok'
import Zavtract from '../component/zavtract/Zavtract'

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/Burger" element={<Burger/>} />
        <Route path="/Desert" element={<Desert />} />
        <Route path="/Napitki" element={<Napitki />} />
        <Route path="/GRool" element={<GRool />} />
        <Route path="/HRool" element={<HRool />} />
        <Route path="/Krylyshki" element={<Krylyshki />} />
        <Route path="/NasiBlud" element={<NasiBlud />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Salad" element={<Salad />} />
        <Route path="/Shaurma" element={<Shaurma />} />
        <Route path="/Soci" element={<Soci />} />
        <Route path="/Sous" element={<Sous />} />
        <Route path="/Wok" element={<Wok />} />
        <Route path="/Zavtract" element={<Zavtract />} />
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

// import React from 'react';

// function App(props) {
//   return (
//     <div>
//       w
//     </div>
//   );
// }

// export default App;