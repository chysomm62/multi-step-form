import { useState } from "react";
import styles from "./App.module.scss";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.app}>
      <Sidebar active={active} setActive={setActive} />
      <Form />
    </div>
  );
}

export default App;
