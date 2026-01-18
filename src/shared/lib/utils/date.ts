import { formatDistanceToNow } from "date-fns";

export const agoDate = (dateString: string) => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};
