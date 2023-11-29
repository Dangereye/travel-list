import { useState } from 'react';

export default function Form({ setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { quantity, description, packed: false, id: Date.now() };

    handleAddItems(newItem);

    setQuantity(1);
    setDescription('');
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
