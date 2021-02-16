import React from 'react'

class Mutirae extends React.Component{
    constructor(){ 
        super();
        this.state={
            mutiroes:[],
        };
    }

    componentDidMount = () =>{ 
        //get mutiroes from api
    }

/*
<?php if ($_SESSION['id'] == $mutiroes['id_usuario']) { ?>
    <div class="d-inline m-2">
        <button class="btn-mutiroesRemove btn btn-danger" value="<?php echo $mutiroes['id_mutirao']; ?>"><small>Remover</small></button>
    </div>
<?php } ?>*/ 
    Remover(){
        //
    }

    GeraMuti() {
        return(
            this.state.mutiroes.map((mutirao) => {
                return(
                    <div class="col-lg-4 p-3">
                        <div class="card card-item ">
                            <div class="d-flex justify-content-center align-items-center">
                                <img class="card-img-top img-fluid" style="width:300px;height:200px;"src={"img/mutiroes/" + mutirao.img_mutirao} alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <div class="">
                                    <h5 class="card-title">{ mutirao.titulo }</h5>
                                    <p  class="card-text">Data/Hora: { mutirao.data_mutirao }</p>
                                </div>
                                <button class="btn btn-primary item-mutirao" value={ mutirao.id_mutirao }>Saiba Mais</button>
                                {this.Remover()}
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-end align-items-end">
                        <a href="/criarmutira"><i class="fas fa-plus-square icon-plus"></i></a>
                    </div>
                </div>
                <div class="row">
                    {this.GeraMuti()}
                </div>
            </div>


        )
    }
}

export default Mutirae;