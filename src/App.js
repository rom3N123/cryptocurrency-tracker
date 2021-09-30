import { Home } from "pages";
import { Route, Switch } from "react-router";

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={Home} />
         </Switch>
      </div>
   );
}

export default App;
