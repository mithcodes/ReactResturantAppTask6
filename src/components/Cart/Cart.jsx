import Modal from "../UI/Modal";

const Cart = ({ showModal }) => {
  const cartItems = [
    {
      id: 124,
      foodName: "Sushi",
      aboutFood: "sushi is a Japanese dish",
      price: 22.5,
    },
  ];
  return (
    <Modal>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>{item.foodName}</div>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => showModal(false)}>Cancel</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
