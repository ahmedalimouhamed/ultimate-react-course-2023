import Button from '../../ui/Button'
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';

export default function DeleteCartItem({pizzaId}) {
  const dispatch= useDispatch();
  return (
    <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
  )
}
