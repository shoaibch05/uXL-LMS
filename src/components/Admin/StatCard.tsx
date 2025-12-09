import { Card } from "antd";

const StatCard = ({
  Name,
  StatNumber,
  Percentage,
}: {
  Name: string;
  StatNumber: string;
  Percentage: number;
}) => {
  return (
    <Card title={Name} variant="borderless" className="text-center">
      <div className="font-bold text-2xl">
        {StatNumber} <br />
      </div>
      <div>
        {Percentage >= 0 ? (
          <span className="text-green-500">▲ {Percentage}%</span>
        ) : (
          <span className="text-red-500">▼ {Math.abs(Percentage)}%</span>
        )}
      </div>
    </Card>
  );
};
export default StatCard;
