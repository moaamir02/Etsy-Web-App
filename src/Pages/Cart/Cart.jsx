import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
  
    <div className="flex justify-center flex-wrap">
      <div className="my-10  w-[800px]">
        {cart?.list && cart?.list?.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cart?.list.map((item) => {
                return <CartItem key={item?.id} data={item} />;
              })}
              <tr className="font-bold my-10">
                <td colSpan={3}>Total:</td>
                <td colSpan={1}>{cart?.total}$</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h1 className="text-center">Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
