import { Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'
import history from './history';

import OutsidePagesRoutes from "./views/templates/outside/outside-routes"
import InsidePagesRoute from './views/templates/inside/inside-routes'

import Index from './views/index'
import Recursos from './views/recursos'
import SobreNos from './views/sobreNos'
import Cadastro from './views/cadastro'
import Lixo from './views/lixo'
import Guia from './views/guia'

import Timeline from './views/logged/timeline'
import Mutirae from './views/logged/mutirae'
import Perfil from './views/logged/perfil'


function App({isLogged}) {
	return (
    <Router history={history}>
      <Switch>
        <OutsidePagesRoutes exact path="/" component={Index} />
        <OutsidePagesRoutes exact path="/recursos" component={Recursos} />
        <OutsidePagesRoutes exact path="/sobreNos" component={SobreNos} />
        <OutsidePagesRoutes exact path="/inscreverse" component={Cadastro} />
        <OutsidePagesRoutes exact path="/lixo" component={Lixo} />
        <OutsidePagesRoutes exact path="/guia" component={Guia} />

        <InsidePagesRoute exact path="/timeline" component={Timeline} />
        <InsidePagesRoute exact path="/Appmutira" component={Mutirae} />
        <InsidePagesRoute exact path="/perfil" component={Perfil} />

      </Switch>
    </Router>
	);
}

const mapStateToProps = ({login:{isLogged}}) =>({
  isLogged,
})
export default connect(mapStateToProps)(App);
