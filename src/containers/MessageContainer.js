import React, { Component } from 'react';
import { connect } from 'react-redux';
import Massage from './../components/Massage';
import PropTypes from 'prop-types';
class MessageContainer extends Component {
    render() {
        var { massage } = this.props
        return (
            <Massage massage={massage} />
        )
    }





}
// đứng đái thấy mình là đàn ông hẳn, đái thế này có tư cách hản lên

// cách check kiểu (type)
MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        massage: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);