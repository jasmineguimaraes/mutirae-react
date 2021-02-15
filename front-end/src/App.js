import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

//import Navbar from './views/navbar'
//import Footer from './views/footer'
//import LoginBox from './views/loginBox'
import OutsidePagesRoutes from "./views/templates/outside/outside-routes"
import InsidePagesRoute from './views/templates/inside/inside-routes'

import Index from './views/index'
import Recursos from './views/recursos'
import SobreNos from './views/sobreNos'
import Cadastro from './views/cadastro'

import Timeline from './views/logged/timeline'


function App({isLogged}) {
	return (
    <Router>
      <Switch>
        <OutsidePagesRoutes exact path="/" component={Index} />
        <OutsidePagesRoutes exact path="/recursos" component={Recursos} />
        <OutsidePagesRoutes exact path="/sobreNos" component={SobreNos} />
        <OutsidePagesRoutes exact path="/inscreverse" component={Cadastro} />
        <InsidePagesRoute exact path="/timeline" component={Timeline} />
      </Switch>
    </Router>
	);
}

const mapStateToProps = ({login:{isLogged}}) =>({
  isLogged,
})
export default connect(mapStateToProps)(App);
