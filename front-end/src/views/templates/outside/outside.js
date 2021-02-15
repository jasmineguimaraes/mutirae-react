import React from 'react'

import Navbar from '../../navbar'
import Footer from '../../footer'
import LoginBox from '../../loginBox'

const OutsidePages = props => {
    return (
        <div>
            <header>
                <Navbar/>
                <LoginBox/>
            </header>
            <div id="content">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default OutsidePages;