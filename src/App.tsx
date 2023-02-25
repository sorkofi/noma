
import {useState} from "react";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";

import "./styles/global.css";

import styles from "./styles/window.module.css";

const Window = () => {
    return <div className={styles.window}></div>
}

function App() {

    const [isWindowOpen, setWindowOpen] = useState(false);

    return (
        <div className="App">
            <Sidebar state={isWindowOpen} setState={setWindowOpen} />

            { isWindowOpen &&
                <Window />
            }

            <Dashboard />
        </div>
  )
}

export default App
