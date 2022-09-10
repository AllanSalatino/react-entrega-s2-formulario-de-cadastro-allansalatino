import React from "react";
import ToastContainer from "./components/ToastContainer";
import AuthProvider from "./context/AuthContext";
import TechProvider from "./context/TechContext";
import RoutesPage from "./Routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TechProvider>
          <RoutesPage />
          <ToastContainer />
        </TechProvider>
      </AuthProvider>
    </div>
  );
}

export default App;