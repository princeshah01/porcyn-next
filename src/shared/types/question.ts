export interface Question {
  _id: string;
  title: string;
  author: {
    name: string;
    profileUrl?: string;
  };
  tags: { _id: string; name: string }[];
  stats: StatsType;
  createdAt: string;
}

export interface StatsType {
  upVote: number;
  downVote: number;
  views: number;
  answer: number;
}
