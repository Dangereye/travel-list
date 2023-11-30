import { useState } from 'react';

// Components
import PackingListItem from './PackingListItem';

export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'name')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <PackingListItem item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>
      <div
        className='actions'
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <select>
          <option value='input'>Sort by added order</option>
          <option value='name'>Sort by name</option>
          <option value='packed'>Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
