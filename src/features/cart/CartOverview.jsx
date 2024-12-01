import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalQuantity, getTotalPrice} from "./CartSlice.js";
import {formatCurrency} from "../../utils/helpers.js";

function CartOverview() {
    const pizzaQuantities = useSelector(getTotalQuantity);
    const pizzasTotalPrice = useSelector(getTotalPrice);


  return (
    <div className="flex bg-stone-800 text-stone-200 px-4 py-4 text-sm uppercase justify-between items-center sm:px-6 md:text-base">
      <p className="space-x-2">
        <span>{pizzaQuantities} pizzas</span>
        <span>{formatCurrency(pizzasTotalPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
