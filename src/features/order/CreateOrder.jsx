/* eslint-disable no-unused-vars */
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

import {Form, redirect, useActionData, useFormAction, useNavigation} from "react-router-dom";
import Button from "../../ui/Button.jsx";
import {createOrder} from "../../services/apiRestaurant.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddress} from "../user/userSlice.js";

function CreateOrder() {
  const navigation = useNavigation()
  const errors = useActionData();
  const {username ,position, address, error: geoError, status: geoStatus} = useSelector(state => state.user);
  const dispatch = useDispatch();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const isSubmitting = navigation.state === "submitting";
  const isLoadingAddress = geoStatus === "loading";
  function handleFetchAddress(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  return (


        <div className="px-4 py-6">
          <h2 className="mb-8 text-xl font-semibold">
            Ready to order? Let&lsquo;s go!
          </h2>

          <Form method="POST">
            <div className="mb-8 flex flex-col gap 2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">First Name</label>
              <input defaultValue={username} className="input grow" type="text" name="customer" required />
            </div>

            <div className="mb-8 flex flex-col gap 2 sm:flex-row sm:items-center">
              <label className="sm:basis-40">Phone number</label>
              <div className="grow">
                <input className="w-full input" type="tel" name="phone" required />
                {errors?.phone && (<h4 className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {errors?.phone}
                </h4>)}
              </div>
            </div>

            <div className="mb-8 flex flex-col gap-3  sm:flex-row sm:items-center relative">
              <label className="sm:basis-40">Address</label>
              <div className="grow">
                <input defaultValue={address} className="w-full input" type="text" name="address" required />
                {geoStatus === 'error' && (<h4 className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {geoError}
                </h4>)}
              </div>
              {!position.latitude && !position.longitude && (
                  <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
              <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => handleFetchAddress(e)}
              >
                Get position
              </Button>
            </span>
              )}
            </div>

            <div className="mb-12 flex items-center gap-5">
              <input
                  className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                type="checkbox"
                name="priority"
                id="priority"
                // value={withPriority}
                // onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority">Want to yo give your order priority?</label>
            </div>

            <div>
              <input type='hidden' name='cart' value={JSON.stringify(cart)}/>
              <Button type='primary' disabled={isSubmitting}>
                {isSubmitting ? 'Your order is placing...' : "Order now"}
              </Button>
            </div>
          </Form>
        </div>

  );
}

export async function action({request}){
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart : JSON.parse(data.cart),
    priority: data.priority === 'on',
  }
  console.log(order);

  const errors = {};

  if(!isValidPhone(order.phone)){
    errors.phone = 'Phone number is invalid. Please type the correct one!';
  }

  if (Object.keys(errors).length > 0){
    return errors;
  }
  // If everything is okay, create new order and redirect

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);

  // return null;
}

export default CreateOrder;