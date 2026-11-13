import MemberCard from './MemberCard.jsx';

export default function MemberGrid({ members = [], onSelect }) {
  if (members.length === 0) return <p>No team members yet.</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}