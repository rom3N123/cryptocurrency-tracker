import { Header } from "components";
import { CoinDetailPage, Home } from "pages";
import { Route, Switch } from "react-router";

function App() {
   return (
      <section>
         <Header />

         <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/currencies/:id" component={CoinDetailPage} />
         </Switch>
      </section>
   );
}

export default App;
