import { Home } from "pages";
import { Header } from "components";
import { Route, Switch } from "react-router";

function App() {
   return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/" component={Home} />
         </Switch>
      </div>
   );
}

export default App;
