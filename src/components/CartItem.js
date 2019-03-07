import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
    render() { 
       var { item} = this.props
       var {quantity} = item
        return (
            <tr>
            <th scope="row">
                <img src={ item.product.image}
                    alt={ item.product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong> { item.product.name} </strong>
                </h5>
            </td>
            <td> {item.product.price} $</td>
            <td className="center-on-small-only">
                <span className="qty"> {quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                        className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick ={ () => this.onUpdatQuantity(item.product , item.quantity - 1) }
                        >
                        <a>—</a>
                    </label>
                    <label 
                        className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick ={ () => this.onUpdatQuantity(item.product , item.quantity  + 1) }
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td> { this.showSubTotal(item.product.price,item.quantity)} $</td>   
            <td>
                <button type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick = { () => this.delete(item.product)}
                    >
                    X
                </button>
            </td>
        </tr>
        );
    }
    delete = (product) => {
        this.props.onDelete(product)
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS)
    }
    showSubTotal = (price, quantity) => {
        return price*quantity;
    }
    onUpdatQuantity = (product, quantity) => {
        if(quantity>0){
           this.props.onUpdateQuantity(product, quantity) // truyền ra ngoài cũng phải để trong xét đk 
        }
        this.props.onChangeMessage(Message.MSG_UPDATE_CARD_SUCCESS)
    }
     
}

export default CartItem;
