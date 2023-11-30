export default function Footer({ items }) {
  let content;

  if (!items.length) {
    content = <em>Start adding items to your packing list</em>;
  } else {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100) | 0;
    content = (
      <em>
        {percentage === 100
          ? "Great work, everything's packed. You're ready to go!"
          : `You have ${numItems} ${
              numItems > 1 ? 'items' : 'item'
            } on your list, and you have already packed
      ${numPacked} (${percentage}%)`}
      </em>
    );
  }

  return <footer className='stats'>{content}</footer>;
}
