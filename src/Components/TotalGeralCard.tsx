interface Props {
  total: number;
}

export function TotalGeralCard({ total }: Props) {
  return (
    <div className="bg-green-900 text-yellow-300 rounded-2xl shadow-xl p-8 text-center max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-2">
        💰 Total Arrecadado 💰
      </h2>

      <p className="text-4xl font-bold">
        R$ {total.toFixed(2)}
      </p>
    </div>
  );
}
