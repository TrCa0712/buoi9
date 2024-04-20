import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

const Cart = () => {
    const { cart } = useContext(AppContext)
    const [count, setCount] = useState(1)
    return (
        <div>
            {
                cart.map((item, index) => (
                    (
                        <div key={index} className='row'>
                            <div><p>{item.NameProduct}</p></div>
                            <div><p> Giá: {item.Gia}</p></div>
                            <div>
                                <button onClick={() => setCount(count - 1)}>-</button>
                                <input type='text' value={count} readOnly={true} />
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                            <div>Tổng tiền sản phẩm {item.id}: {item.Gia * count} VND</div>
                        </div>

                    )
                ))


            }
        </div>
    );
}

export default Cart;
