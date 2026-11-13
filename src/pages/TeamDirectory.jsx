import Panel from '../components/Panel.jsx';
import MemberGrid from '../components/MemberGrid.jsx';
import { team } from '../data/team.js';

export default function TeamDirectory() {
  const availableCount = team.filter(
    (person) => person.available
  ).length;

  function handleSelect(person) {
    console.log('Selected team member:', person.name);
  }

  return (
    <main className="mx-auto max-w-5xl p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p>{team.length} members · {availableCount} available</p>
      </header>

      <Panel title="Team directory">
        <MemberGrid members={team} onSelect={handleSelect} />
      </Panel>
    </main>
  );
}