import React from 'react'
import { useSelector } from "react-redux"
import { ProductItem } from '../interfaces/global'
import { useDispatch } from "react-redux"
import { increment, remove, decrement } from "../store/index"
import {Container,Row,Col} from 'react-bootstrap';
import EmptyBasket from './EmptyBasket'

function Basket() {
    const dispatch = useDispatch()

    const products = useSelector((store: ProductItem[]) => (
        store)
    )
    console.log("products", products)

    return (

        <div className="basket_container">
            <div>
                {products.filter((product) => product.added).length > 0 ? (
                   <Container>
                       <Row>
                           <Col className="col-basket">
                               <h4>Product</h4>
                               <hr/>
                           </Col>
                           <Col xs lg="4" className="col-basket">
                               <h4>Subtotal</h4>
                               <hr/>
                           </Col>
                       </Row>
                        <Row>
                            <Col>
                         {products.filter((product)=>product.added)
                        .map((product)=>(
                        <Row>
                            <Col>
                                    <Row>
                                        <Col xs lg="3"><img src={`/images/${product.imageUrl}`} width="150px" height="180px" alt={product.imageUrl}/></Col>
                                        <Col className="product-item" >
                                        <h5 className="h5-title">{product.title}</h5>
                                        <h5 className="h5-desc">{product.description}</h5>
                                        <h5 className="h5-logo"></h5>
                                        <h5 className="h5-price">$ {product.price}</h5>
                                        <h5 className="h5-quantity">Quantity</h5>
                                        <button className="btn-quantity" onClick={()=>dispatch(increment(product))}>+</button>
                                        {product.quantity}{' '}
                                        <button className="btn-quantity" onClick={()=>dispatch(decrement(product))} >-</button>
                                        <button className="remove-btn" onClick={()=>dispatch(remove(product))} >Remove</button>
                                        </Col>
                                        <Col md="auto"></Col>
                                    </Row>       
                                    <br/>
                                    <br/>
                                    <hr/>                        
                            </Col>
                            
                        </Row>
                        ))}
                        </Col>
                        <Col xs lg="4">
                        <h4 className="total-amount"> $  {products.filter((product) => (product.added))
                                        .reduce((totalPrice, product) => (totalPrice + product.price * product.quantity), 0)}</h4>
                                        <hr/>
                                        <br/>
                                        
                                        <button className="btn-Checkout">Proceed to Checkout</button>
                        </Col>
                        </Row>
                   </Container>         
                ) : <EmptyBasket />}
            </div>

        </div>
    )
}

export default Basket


