import { MessageSquare, Eye } from "lucide-react";

import { UpArrow, DownArrow } from "~/assets/svg";
import { StatsType } from "~/shared/types";

interface StatCardProps {
  props: StatsType;
}
interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}
const StatCard = ({
  props: { upVote, downVote, views, answer },
}: StatCardProps) => {
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <StatItem
        icon={<UpArrow className="h-3 w-3" />}
        value={upVote}
        label="votes"
      />
      <StatItem
        icon={<DownArrow className="h-3 w-3" />}
        value={downVote}
        label="votes"
      />
      <StatItem
        icon={<MessageSquare size={10} />}
        value={answer}
        label="answers"
      />
      <StatItem icon={<Eye size={10} />} value={views} label="views" />
    </div>
  );
};

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <span className="flex items-center gap-1">
      {icon}
      <span>{value}</span>
      <span>{label}</span>
    </span>
  );
};

export { StatCard, StatItem };
