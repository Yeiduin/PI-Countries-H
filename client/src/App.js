import { Route, Switch } from "react-router-dom";
import DetallesDePais from "./components/DetallesDePais";
import Home from "./components/Home";
import PaginaInicial from "./components/PaginaInicial";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <PaginaInicial></PaginaInicial>
        </Route>

        <Route exact path={"/Home"} component={Home}></Route>
        <Route exact path={"/countries/:id"} component={DetallesDePais}></Route>
      </Switch>
    </>
  );
}

export default App;
