import StatusBadge from './StatusBadge.jsx';

export default function MemberCard({ member, onSelect }) {
  const {
    name,
    role,
    city = 'Kigali',
    skills = [],
    available = false
  } = member;

  return (
    <article className="rounded-xl border p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold">{name}</h3>
        <StatusBadge available={available} />
      </div>

      <p className="mt-1 text-sm text-slate-600">
        {role} · {city}
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded bg-slate-100 px-2 py-1 text-xs">
            {skill}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onSelect(member)}
        className="mt-4 rounded bg-violet-500 px-3 py-2 text-white"
      >
        View {name.split(' ')[0]}
      </button>
    </article>
  );
}