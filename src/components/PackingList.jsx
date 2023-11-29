import PackingListItem from './PackingListItem';

export default function PackingList({ items, setItems }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <PackingListItem item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>
    </div>
  );
}
