import {formatCurrency} from "../../utils/helpers.js";

// eslint-disable-next-line react/prop-types,no-unused-vars
function OrderItem({ item, isLoadingIngredients, ingredients }) {
    // eslint-disable-next-line react/prop-types
  const { quantity, name, totalPrice } = item;

  return (
      <li className="py-3">
          <div className="flex items-center justify-between gap-4 text-sm">
              <p>
                  <span className="font-bold">{quantity}&times;</span> {name}
              </p>
              <p className="font-bold">{formatCurrency(totalPrice)}</p>
          </div>
          <p className="text-sm text-stone-500 font-thin italic capitalize">
              {/* eslint-disable-next-line react/prop-types */}
              { isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
          </p>
      </li>
  );
}

export default OrderItem;
