import "./App.css";
import styles from "./style.module.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import ArrayPrototypeLast from "./tasksList/ArrayPrototypeLast";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.list}>
              <Link to="/array-prototype-last" className={styles.link}>
                Array Prototype Last
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/array-prototype-last"
            element={<ArrayPrototypeLast />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
