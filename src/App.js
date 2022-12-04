import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import CardDetails from "./components/CardDetails";
import Navbar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import { GlobalProvider } from "./context/GlobalState";
import Watchlist from "./components/Watchlist";

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/carddetails/:id" element={<CardDetails />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/series" element={<TVShows />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/mylist" element={<Watchlist />} />
          <Route exact path="/addmovie" element={<AddMovie />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}
