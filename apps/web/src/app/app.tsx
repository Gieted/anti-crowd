import styles from './app.module.scss'
import Recent from "./recent/recent";

export function App() {
  return (
    <div className={styles.App}>
      <Recent/>
    </div>
  );
}

export default App;
