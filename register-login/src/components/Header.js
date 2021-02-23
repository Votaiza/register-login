import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'

function Header(props) {
    return (
        <header className="bg-gray-700 flex-1 py-8">
            <Logo height={250} width={250}/>
        </header>
    )
}

Header.propTypes = {

}

export default Header


