function App() {
  return (
    <>
      <div>
        <form>
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
              <input name="quero" type="text" className="form-control" />
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
      </div>
    </>
  );
}

export default App;
