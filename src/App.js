import { Box } from '@chakra-ui/react';
import {Route, Routes,} from "react-router"
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <Routes>
      <Route path="/" exact />
      <Route path="/login" element={<Login />} />
      <Route path='signup' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
