import { RegisterBackLog, SearchBackLog } from "../services/services.js";
import { useRef, useEffect } from "react";
export default function Form({ setData, lists }) {
  const queroInput = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.acao = "RegisterBackLog";
    await RegisterBackLog(data);
    const dados = await SearchBackLog();
    const updatedLists = { ...lists };
    const newData = { ...data, id: dados[dados.length - 1].idInfo };
    updatedLists.list3.push(newData);
    setData(updatedLists);
    e.target.reset();
    queroInput.current.focus();
  }

  useEffect(() => {
    queroInput.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12 col-md-4 d-flex align-items-center p-0">
            <label htmlFor="perfil" className="mx-2">
              Como
            </label>
            <select
              name="perfil"
              defaultValue={"Cliente"}
              className="form-select"
            >
              <option value="Cliente">Cliente</option>
              <option value="Administrador">Administrador</option>{" "}
            </select>
          </div>
          <span className="col-sm-12 col-md-4 d-flex align-items-center p-0">
            <label htmlFor="quero" className="mx-2">
              quero
            </label>
            <input
              name="quero"
              ref={queroInput}
              type="text"
              className="form-control"
            />
          </span>
          <span className="col-sm-12 col-md-4 d-flex align-items-center p-0">
            <label htmlFor="para" className="mx-2">
              para
            </label>
            <input type="text" name="para" className="form-control" />
          </span>
        </div>
        <br />
        <div className="text-center">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}
