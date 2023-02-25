
import {useState} from "react";
import {Route, Router, Routes} from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Window } from "./routes/Window";

import "./styles/global.css";

function App() {

    const [isWindowOpen, setWindowOpen] = useState(false);

    return (
        <div className="App">
            <Sidebar state={isWindowOpen} setState={setWindowOpen} />

            { isWindowOpen &&
                <Window state={isWindowOpen} setState={setWindowOpen} />
            }
            
            
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="new" element={<h1>hello</h1>} />
                </Route>
            </Routes>
        </div>
  )
}

export default App
