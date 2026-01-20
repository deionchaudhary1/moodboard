type Props = {
  value: string;
  onChange: (color: string) => void;
};

const COLORS = [
  "#111111", // dark
  "#ffffff", // light
  "#1e293b", // slate
  "#0f172a", // deep blue
  "#3f3f46", // zinc
  "#f5f5f4"  // warm light
];

export default function BackgroundSelector({ value, onChange }: Props) {
  return (
    <div className="bg-selector">
      {COLORS.map(color => (
        <button
          key={color}
          className={`bg-swatch ${value === color ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
}
