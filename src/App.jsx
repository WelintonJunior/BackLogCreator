import Form from "./components/Form";
import BackLog from "./components/BackLog";
import { useState, useEffect } from "react";
import { SearchBackLog, UpdateList } from "./services/services";

function App() {
  const [DADOS, setDADOS] = useState({
    list1: [],
    list2: [],
    list3: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await SearchBackLog();
      const lists = {
        list1: [],
        list2: [],
        list3: [],
      };

      if (data) {
        for (const item of data) {
          const list = item.nivInfo;

          if (list === 2) {
            lists.list1.push({
              id: item.idInfo,
              perfil: item.perfilInfo,
              quero: item.queroInfo,
              para: item.paraInfo,
            });
          } else if (list === 1) {
            lists.list2.push({
              id: item.idInfo,
              perfil: item.perfilInfo,
              quero: item.queroInfo,
              para: item.paraInfo,
            });
          } else if (list === 0) {
            lists.list3.push({
              id: item.idInfo,
              perfil: item.perfilInfo,
              quero: item.queroInfo,
              para: item.paraInfo,
            });
          }
        }
      }

      setDADOS(lists);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  function handleItemMoved(saiu, destino, item) {
    UpdateList(destino, item);
  }

  return (
    <>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <>
          <Form setData={setDADOS} lists={DADOS} />
          <BackLog
            lists={DADOS}
            setData={setDADOS}
            onItemMoved={handleItemMoved}
          />
        </>
      )}
    </>
  );
}

export default App;
