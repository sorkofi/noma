import styles from "../styles/sidebar.module.css";

import quill from "../assets/quill.svg";
import mindmap from "../assets/mind-map.svg";
import gear from "../assets/gear.svg";
import {Link} from "react-router-dom";

type Props = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = (args: Props) => {

    console.log("Sidebar not fully implemented yet.");

    function handleClick() {
        args.setState(!args.state);
    }

    function handleGear() {}
    function handleMaps() {}
    
    return (
        <div className={styles.sidebar}>
            <Link to="new">
                <img className={styles.icon} src={quill} onClick={() => handleClick()} />
            </Link>
            <img className={styles.icon} src={mindmap} onClick={() => handleClick()} />
            
            <div className="sidebar_divider" />
            <img className={styles.icon} src={gear} onClick={() => handleClick()} />


        </div>
    );
}
