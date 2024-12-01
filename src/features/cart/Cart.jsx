import ButtonLink from "../../ui/ButtonLink.jsx";
import Button from "../../ui/Button.jsx";
import CartItem from "./CartItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, getCart} from "./CartSlice.js";
import EmptyCart from "./EmptyCart.jsx";
import {useNavigate} from "react-router-dom";

function Cart() {
    const cart = useSelector(getCart);
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnClearCart(){
        dispatch(clearCart());
        navigate('/menu');
    }

  if(cart.length === 0) return <EmptyCart/>

  return (
    <div className="py-3 px-4">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

        <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
        </ul>

      <div className="mt-6 space-x-2">
        <Button type='primary' to="/order/new">Order pizzas</Button>
        <Button type='secondary' onClick={handleOnClearCart}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;