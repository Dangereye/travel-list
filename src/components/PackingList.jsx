import PackingListItem from './PackingListItem';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <PackingListItem item={item} />
        ))}
      </ul>
    </div>
  );
}