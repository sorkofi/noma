
import { RecentSection } from "./RecentSection";

import styles from "../styles/dashboard.module.css";

export const Dashboard = () => {
    // TODO: Implement grid with panels of notes and general information about user.
    console.log("Dashboard not fully implemented yet.");
    
    return (
        <div className={styles.dashboard}>
            <div className={styles.workspace}>
                <p>Recent Notes</p>
                <RecentSection />

                <div className="divider" />
                <p>Library</p>
                <RecentSection />
            </div>

            <div className={styles.widgets}>
                {
                    [0,1,2].map((p) => {
                        return <div className={styles.widget_panel}>Placeholder panel</div>
                    })
                }
            </div>
        </div>
    );
};
