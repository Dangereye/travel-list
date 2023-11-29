export default function PackingListItem({ item, setItems }) {
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
