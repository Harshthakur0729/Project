import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Ludo from "./option_pages/Ludo"
import Ludosupreme from './option_pages/Ludosupreme';
import Ludoturbo from './option_pages/Ludoturbo';
import Ludosupremeleague from './option_pages/Ludosupremeleague';
import SnakesAndLaddersPlus from './option_pages/SnakesAndLaddersPlus';
import TrumpCardsMania from './option_pages/TrumpCardsMania';
import Tnc from './Footerpages/Tnc';
import TandC from './Footerpages/TandC';
import Privacypolicy from './Footerpages/Privacypolicy';
const router = createBrowserRouter([

  {
    path: "/", element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/ludo", element: <Ludo /> },
      { path: "/ludo/ludo-supreme", element: <Ludosupreme /> },
      { path: "/ludo/ludo-turbo", element: <Ludoturbo /> },
      { path: "/ludo/ludo-supreme-league", element: <Ludosupremeleague /> },
      { path: "/snakes-and-ladders-plus", element: <SnakesAndLaddersPlus /> },
      { path: "/trump-cards-mania", element: <TrumpCardsMania /> },
      { path: "/tnc-rewards-scheme", element: <Tnc /> },
      { path: "/zupee-free/terms-conditions", element: <TandC /> },
      { path: "/privacy-policy", element: <Privacypolicy /> }



    ]
  }])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App