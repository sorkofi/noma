import styles from "../styles/sidebar.module.css";

import quill from "../assets/quill.svg";
import mindmap from "../assets/mind-map.svg";
import gear from "../assets/gear.svg";

export const Sidebar = () => {
    // TODO: Implement side bar with options write/notifications/profile
    console.log("Sidebar not fully implemented yet.");
    
    return (
        <div className={styles.sidebar}>
            <img className={styles.icon} src={quill} />
            <img className={styles.icon} src={mindmap} />
            
            <div className="sidebar_divider" />
            <img className={styles.icon} src={gear} />


        </div>
    );
}
