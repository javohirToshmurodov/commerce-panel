import { Box } from '@mui/material';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import { menuData } from './components/Menu/menudata';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import CheckoutDetails from './pages/CheckoutDetails';
import Home from './pages/Home';
import Main from './pages/Main';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Reviews from './pages/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <Routes>
          {menuData.map(({ url, id }) => {
            return <Route key={id} path={url} element={<Menu />} />;
          })}
        </Routes>
        <Routes>
          {menuData.map(({ url, element, id }) => {
            return <Route key={id} path={url} element={element} />;
          })}
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to={"/main"} />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
