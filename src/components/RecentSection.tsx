import styles from "../styles/dashboard.module.css";

export const RecentSection = () => {
    return (
        <div className={styles.recentsection}>
        {
            [0,1,2].map((panel) => {
                return <div className={styles.panel}>
                    <p>Hello, world! this is panel {panel}</p>
                </div>
            })
        }
        </div>
    );
};
