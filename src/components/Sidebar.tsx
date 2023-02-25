import styles from "../styles/sidebar.module.css";

import quill from "../assets/quill.svg";
import mindmap from "../assets/mind-map.svg";
import gear from "../assets/gear.svg";

type Props = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = (args: Props) => {

    console.log("Sidebar not fully implemented yet.");

    function handleQuill() {
        args.setState(!args.state);
    }

    function handleGear() {}
    function handleMaps() {}
    
    return (
        <div className={styles.sidebar}>
            <img className={styles.icon} src={quill} onClick={() => handleQuill()} />
            <img className={styles.icon} src={mindmap} onClick={() => handleMaps()} />
            
            <div className="sidebar_divider" />
            <img className={styles.icon} src={gear} onClick={() => handleGear()} />


        </div>
    );
}
