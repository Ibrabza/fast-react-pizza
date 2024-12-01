import Button from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {decreaseItemQuantity, getQuantity, increaseItemQuantity} from "../features/cart/CartSlice.js";

// eslint-disable-next-line react/prop-types,no-unused-vars
export default function UpdateQuantity({pizzaId}) {
    const dispatch = useDispatch();
    const quantity = useSelector(getQuantity(pizzaId));
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium">{quantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}