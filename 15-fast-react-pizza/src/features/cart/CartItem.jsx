import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateItemCartQuantity from "./UpdateItemCartQuantity";
import { getCurrentQuentityById } from "./CartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuentityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemCartQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteCartItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
