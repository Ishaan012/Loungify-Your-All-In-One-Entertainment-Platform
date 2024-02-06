import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import News from "./components/News/App";
import AboutUs from './components/homepage/About'
import LandingPage from "./components/landingpage/landing";
import MusicPage from "./components/Music/Music";
import MeditationPage from "./components/Meditation/FocusApp";
import GameHomePage from './components/Game/gameHomePage/Homepage/Homepage';
import CandyCrush from './components/Game/Candy-Crush/CandyCrush';
import Hangman from "./components/Game/Hangman/Hangman";
import RPS from "./components/Game/Rock-Paper-Scissor/RockPaperScissor";
import Snake from "./components/Game/Snake-Game/SnakeGame";
import TTT from "./components/Game/Tic-Tac-Toe/TicTacToe";
import Scramble from "./components/Game/word-scramble/Temp";
import LikedMusic from './components/Music/components/LikedMusic';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "landing",
    element: <LandingPage />
  },
  {
    path: "about",
    element: <AboutUs />
  },
  {
    path: "/landing/games",
    element: <GameHomePage />
  },
  {
    path: "/landing/news/*",
    element: <News />
  },
  {
    path: "/landing/meditation",
    element: <MeditationPage />
  },
  {
    path: "/landing/music/",
    element: <MusicPage />
  },
  {
    path: "/likedmusic",
    element: <LikedMusic />
  },
  {
    path: "/landing/games/candycrush",
    element: <CandyCrush />
  },
  {
    path: "/landing/games/hangman",
    element: <Hangman />
  },
  {
    path: "/landing/games/rps",
    element: <RPS />
  },
  {
    path: "/landing/games/snake",
    element: <Snake />
  },
  {
    path: "/landing/games/ttt",
    element: <TTT />
  },
  {
    path: "/landing/games/scramble",
    element: <Scramble />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
