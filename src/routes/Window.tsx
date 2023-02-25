import styles from "../styles/app.module.css";

// TODO: Add proper types
export const Window = (args: any) => {
    return (
        <div className={styles.window_shadow}>

            <div className={styles.window_panel}>
                <button onClick={() => args.setState(false)}>Close</button>
            </div>
        </div>
    );
}
