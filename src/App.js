import { CoinDetailPage, Home } from "pages";
import { Route, Switch } from "react-router";

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/currencies/:id" component={CoinDetailPage} />
         </Switch>
      </div>
   );
}

export default App;
