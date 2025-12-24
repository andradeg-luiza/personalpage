type BadgeProps = {
  label: string;
  className?: string;
};

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 text-sm rounded-full bg-gray-800 text-white ${className}`}
    >
      {label}
    </span>
  );
}