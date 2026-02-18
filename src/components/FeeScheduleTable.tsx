interface FeeScheduleRow {
  tier: string;
  description: string;
  price: string;
}

interface FeeScheduleTableProps {
  rows: FeeScheduleRow[];
}

export default function FeeScheduleTable({ rows }: FeeScheduleTableProps) {
  if (rows.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-bg-light">
            <th className="text-left p-4 font-semibold border-b border-gray-200">
              Tier
            </th>
            <th className="text-left p-4 font-semibold border-b border-gray-200">
              Description
            </th>
            <th className="text-left p-4 font-semibold border-b border-gray-200">
              Pricing
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.tier} className="border-b border-gray-100">
              <td className="p-4 font-medium">{row.tier}</td>
              <td className="p-4 text-gray-600">{row.description}</td>
              <td className="p-4 text-accent font-semibold">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
