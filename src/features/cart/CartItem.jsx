import {formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {deleteItem} from "./CartSlice.js";
import UpdateQuantity from "../../ui/UpdateQuantity.jsx";

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
    // eslint-disable-next-line react/prop-types
  const { pizzaId, name, quantity, unitPrice } = item;
  const dispatch = useDispatch();

  function handleOnDeleteItem(){
      dispatch(deleteItem(pizzaId));
  }

  return (
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
          <p className="mb-1 sm:mb-0">
              {quantity}&times; {name}
          </p>
          <div className="flex items-center justify-between sm:gap-6">
              <p className="text-sm font-bold">{formatCurrency(quantity * unitPrice)}</p>
              <UpdateQuantity pizzaId={pizzaId}  />
              <Button type="small" onClick={handleOnDeleteItem}>Delete</Button>
          </div>
      </li>
  );
}


export default CartItem;
