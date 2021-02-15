import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './views/navbar'
import Footer from './views/footer'
import LoginBox from './views/loginBox'
import Index from './views/index'
import Recursos from './views/recursos'
import SobreNos from './views/sobreNos'
import Cadastro from './views/cadastro'

function App() {
	return (
    <Router>
      <header>
        <Navbar/>
        <LoginBox/>
      </header>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/recursos" component={Recursos} />
        <Route exact path="/sobreNos" component={SobreNos} />
        <Route exact path="/inscreverse" component={Cadastro} />
      </Switch>
      <Footer/>
    </Router>
	);
}

export default App;
