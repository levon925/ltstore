import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const showOrders = (props) => {
    let summ = 0
    props.orders.forEach(el => summ += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summ'>ღირებულება: {new Intl.NumberFormat().format(summ)}₾</p>
        </div>
    )
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>კალათა ცარიელია</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>L&T STORE</span>
                <ul className='nav'>
                    <li>ჩვენს შესახებ</li>
                    <li>კონტაქტი</li>
                    <li>კაბინეტი</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? 
                        showOrders(props) : showNothing()    
                    }
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
