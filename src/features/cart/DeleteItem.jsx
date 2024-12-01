import Button from "../../ui/Button.jsx";
import {deleteItem} from "./CartSlice.js";
import {useDispatch} from "react-redux";

// eslint-disable-next-line react/prop-types
export default function DeleteItem({pizzaId}){
    const dispatch = useDispatch();
    return (
        <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
        </Button>
    )
}