import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Toaster />
    </>
  );
}

export default App;
