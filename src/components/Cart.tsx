interface CartItem {
  desc: string;
  price: number;
  quantity: number;
  quantityInStock: number;
}

interface Props {
  cartList: CartItem[];
  onDelete: (desc: string) => void;
  onIncrease: (desc: string) => void;
  onDecrease: (desc: string) => void;
}

const Cart = ({ cartList, onDecrease, onDelete, onIncrease }: Props) => {
  if (cartList.length === 0) return <p>No item in cart</p>;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((item) => (
          <tr key={item.desc}>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>
              <button className="btn" onClick={() => onIncrease(item.desc)}>
                +
              </button>
              {item.quantity}
              <button className="btn" onClick={() => onDecrease(item.desc)}>
                -
              </button>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(item.desc)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {cartList
              .reduce((acc, item) => item.price * item.quantity + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Cart;
