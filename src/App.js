
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import ForgetPassword from './pages/authentication/ForgetPassword';
import ResetPassword from './pages/authentication/ResetPassword';
import VerifyEmail from './pages/authentication/VerifyEmail';
import TwoStepVerification from './pages/authentication/TwoStepVerification';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Register />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/two-step-verification' element={<TwoStepVerification />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
