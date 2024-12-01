/* eslint-disable react/prop-types */
import {formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import {addItem, getQuantity,} from "../cart/CartSlice.js";
import {useDispatch, useSelector} from "react-redux";
import UpdateQuantity from "../../ui/UpdateQuantity.jsx";
import DeleteItem from "../cart/DeleteItem.jsx";

function MenuItem({ pizza }) {
    // eslint-disable-next-line no-unused-vars
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getQuantity(id))
  const isInCart = currentQuantity > 0;


  function handleOnAddItem(){
      const newItem = {
          pizzaId: id,
          name,
          quantity : 1,
          unitPrice,
          totalPrice : unitPrice * 1,
      }
      dispatch(addItem(newItem));
  }



  return (
    <li className="flex gap-4 py-2">
      <img className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} src={imageUrl} alt={name} />
        <div className="flex grow flex-col pt-0.5">
            <p className="font-medium">{name}</p>
            <p className="text-sm capitalize text-stone-500 italic">
                {ingredients.join(', ')}
            </p>
            <div className="mt-auto flex items-center justify-between">
                {!soldOut ? (
                    <p className="text-sm">{formatCurrency(unitPrice)}</p>
                ) : (
                    <p className="text-sm font-medium uppercase text-stone-500">
                        Sold out
                    </p>
                )}

                {isInCart && (
                    <div className="flex items-center gap-3 sm:gap-8">
                        <UpdateQuantity pizzaId={id}/>
                        <DeleteItem pizzaId={id}/>
                    </div>
                )
                }

                {!soldOut && !isInCart &&
                    (
                        <div className="flex items-center gap-3 md:gap-5 ">
                            <Button type="small" onClick={handleOnAddItem}>
                                Add to cart
                            </Button>
                        </div>
                    )
                }
            </div>
        </div>
    </li>
  );
}

export default MenuItem;