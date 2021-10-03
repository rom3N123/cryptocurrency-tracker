import { Header } from "components";
import { CoinDetailPage, Home, Trending } from "pages";
import { Route, Switch } from "react-router";

function App() {
   return (
      <section>
         <Header />

         <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/currencies/:id" component={CoinDetailPage} />

            <Route path="/trending" component={Trending} />
         </Switch>
      </section>
   );
}

export default App;
