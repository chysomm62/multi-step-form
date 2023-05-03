import { useState } from "react";
import styles from "./App.module.scss";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.app}>
      <Form active={active} setActive={setActive} />
      <Sidebar active={active} setActive={setActive} />
    </div>
  );
}

export default App;
