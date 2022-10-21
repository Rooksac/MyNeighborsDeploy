
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import {useState, useEffect} from 'react'
import {Route, Routes} from "react-router-dom"
import EasyPuzzle from './components/EasyPuzzle';
import PuzzleHistory from './components/PuzzleHistory';
import PuzzleFeed from './components/PuzzleFeed';
import MediumPuzzle from './components/MediumPuzzle';
import HardPuzzle from './components/HardPuzzle'
import SolvePuzzle from './components/SolvePuzzle';

function App() {
  const [user, setUser] = useState('')
  function onLogin(userData){
    setUser(userData)
  }
  function handleLogout(){
    fetch ('/logout', {
      method: 'DELETE',})
      .then((res) => {
        if (res.ok) {
          setUser('')
        }
      }); 
  }

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
      res.json().then((user) => {
        setUser(user);
      });
    }
    });
  }, []);
  return (
    <div className="App">
      <NavBar user = {user} handleLogout = {handleLogout}/>
      <Routes>
      <Route path = '/login' element = {<Login onLogin = {onLogin} user = {user}/>}/>
      <Route path = '/' element = {<Home user = {user}/>}/>
      <Route path = '/puzzle_history' element = {<PuzzleHistory puzzles = {user.puzzles}/>}/>
      <Route path = '/puzzle_feed' element = {<PuzzleFeed />}/>
      <Route path = '/easy_puzzle' element = {<EasyPuzzle/>}/>
      <Route path = '/medium_puzzle' element = {<MediumPuzzle/>}/>
      <Route path = '/hard_puzzle' element = {<HardPuzzle/>}/>
      <Route path = '/solve_puzzle/:id' element = {<SolvePuzzle user = {user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
