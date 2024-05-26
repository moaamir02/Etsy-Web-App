import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../Redux/Slice/cartSlice";
import './Cart.css'

export default function CartItem({ data }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(data?.quantity);
  const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
    setQuantity(value);
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: data?.id }));
  };

  useEffect(() => {
    setTotalPrice(data?.price * quantity);
    dispatch(updateQuantity({ id: data?.id, quantity }));
  }, [quantity, data?.price, data?.id, dispatch]);

  return (
    <tr className="">
      <td>
        <div className="flex items-center">
          <img src={data.imageUrl} alt="" className="w-[200px]" />
          <p className="text-center">{data.name}</p>
        </div>
      </td>
      <td className="price">{data.price}$</td>
      <td>
        <div className="flex items-center justify-center">
          <button  
            onClick={() => {
              if (quantity > 1) {
                setQuantity((prev) => prev - 1);
              }
            }}
            className="changeBtn"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleChange}
            className="mx-2 w-12 text-center"
          />
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="changeBtn"
          >
            +
          </button>
        </div>
      </td>
      <td className="price">{totalPrice}$</td>
      <td className="">
        <button onClick={handleRemove}>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
}
