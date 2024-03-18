import { useState, useEffect } from "react";
import { SearchBackLog } from "../services/services.js";

export default function BackLog() {
  const [DADOS, setDADOS] = useState([]);

  useEffect(() => {
    async function SearchInStart() {
      const data = await SearchBackLog();
      console.log(data);
      setDADOS(data);
    }
    SearchInStart();
  }, []);

  return (
    <div className="BackLog">
      <ul>
        {Array.isArray(DADOS) &&
          DADOS.map((dado) => (
            <li key={dado.idInfo}>
              Como: {dado.perfilInfo} Quero: {dado.queroInfo} Para:
              {dado.paraInfo}
            </li>
          ))}
      </ul>
    </div>
  );
}
