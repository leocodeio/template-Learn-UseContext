import { useState } from "react";
import "./App.css";
import useDataContext from "./context/DataContext";

export default function App() {
  const { data, setData } = useDataContext();
  const [changeData, setChangeData] = useState("");
  const handleClick = () => {
    setData(changeData);
  };
  return (
    <main>
      {data}
      <button onClick={handleClick}>change data to content in</button>
      <input
        type="text"
        name="changer"
        value={changeData}
        onChange={(e) => {
          setChangeData(e.target.value);
        }}
      />
    </main>
  );
}
