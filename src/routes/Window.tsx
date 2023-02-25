import {Outlet, Routes, Route, Link} from "react-router-dom";
import styles from "../styles/app.module.css";

// TODO: Add proper types
export const Window = (args: any) => {
    return (
        <div className={styles.window_shadow}>

            <div className={styles.window_panel}>
                <Link to="/">
                    <button onClick={() => args.setState(false)}>Close</button>
                </Link>

                <Routes>
                    <Route path="newNote" element={<h1>new note.</h1>} />
                    <Route path="newMindMap" element={<h1>new mind map</h1>} />
                    <Route path="settings" element={<h1>settings</h1>} />
                </Routes>
            </div>
        </div>
    );
}
