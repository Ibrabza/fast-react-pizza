import ButtonLink from "../../ui/ButtonLink.jsx";

function EmptyCart() {
  return (
    <div className="py-4 px-5">
        <ButtonLink to="-1" >&larr; Go back</ButtonLink>
        <p className="mt-4 font-semibold">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
