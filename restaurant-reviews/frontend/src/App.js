import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantsList from "./components/RestaurantsList";
import AddReview from "./components/AddReview";
import Restaurant from "./components/Restaurant";
import Login from "./components/Login";
import DefaultPage from "./components/DefaultPage";
import "./App.css";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user)
  }

  async function logout() {
    setUser(null)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage user={user} login={login} logout={logout} />}>
          <Route index element={<RestaurantsList />} />
          <Route path="restaurants" element={<RestaurantsList />} />
          <Route path="restaurants/:id/review" element={<AddReview />} />
          <Route path="restaurants/:id" element={<Restaurant user={user}/>} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;