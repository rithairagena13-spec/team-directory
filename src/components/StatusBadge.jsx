export default function StatusBadge({ available = false }) {
  const colors = available
    ? 'bg-green-100 text-green-800'
    : 'bg-slate-100 text-slate-700';

  return (
    <span className={`rounded-full px-3 py-1 text-xs ${colors}`}>
      {available ? 'Available' : 'Busy'}
    </span>
  );
}