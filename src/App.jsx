import { useState } from "react";
import styles from "./App.module.scss";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import { UserProvider } from "./UserContext";

function App() {
  const [active, setActive] = useState(1);

  return (
    <UserProvider>
      <main className={styles.app}>
        <Form />
        <Sidebar />
      </main>
    </UserProvider>
  );
}

export default App;
