import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <div className='mt-24 md:mt-24 p-8 w-full'>
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
