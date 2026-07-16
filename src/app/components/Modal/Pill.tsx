'use client';
interface PillProps {
  text: string;
}

const Pill: React.FC<PillProps> = ({ text }) => {
  return (
    <div className="m-1 rounded-full border border-edge bg-overlay px-3 py-1.5 font-mono text-xs text-secondary">
      {text}
    </div>
  );
};
Pill.displayName = 'Pill';
export default Pill;
