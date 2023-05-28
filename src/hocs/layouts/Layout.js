import { connect } from 'react-redux';
import React  from 'react';
import PropTypes from 'prop-types';



function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}
Layout.propTypes = {
    children:PropTypes.element
}
const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

}) (Layout);