export default function AwardCard({
  year,
  award,
}: Readonly<{
  year: string;
  award: string;
}>) {
  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-600">
      <div>
        <h4 className="text-lg font-medium">{year}</h4>
        <p className="text-sm text-gray-400">{award}</p>
      </div>
      <button className="text-white text-xl">→</button>
    </li>
  );
}
