import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Massage from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actDeleteProductInCart, actChangeMessage, actUpdateQuantity } from './../actions/index';


class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }

    showCartItem = (cart) => {
        var result = <tr>
            <td>
                {Massage.MSG_CARD_EMPTY}
            </td>
        </tr>;
        var { onDelete, onChangeMessage, onUpdateQuantity } = this.props
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDelete={onDelete}
                        onChangeMessage={onChangeMessage}
                        onUpdateQuantity={onUpdateQuantity}
                    />
                );
            })
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }

        return result;
    }



}
// đứng đái thấy mình là đàn ông hẳn, đái thế này có tư cách hản lên

// cách check kiểu (type)
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            iventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateQuantity: (product, quantity) => {
            dispatch(actUpdateQuantity(product, quantity))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);