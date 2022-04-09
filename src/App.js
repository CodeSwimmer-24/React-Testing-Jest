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
        <div className='mt-16 md:mt-20 px-4 md:px-16 py-16 w-full'>
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
