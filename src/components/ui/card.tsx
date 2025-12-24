type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ title, description, children, className }: CardProps) {
  return (
    <div className={`p-6 rounded-lg bg-gray-900 border border-gray-700 ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {children}
    </div>
  );
}