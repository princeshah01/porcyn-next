import { FeedDataProps } from "~/features/feed";
import { QuestionCard } from "~/shared/components/question-card";

const MOCK_DATA = [
  {
    _id: "1",
    title: "How to implement authentication in React?",
    author: {
      _id: "1",
      name: "Alice",
      profileUrl: "",
    },
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "authentication" },
      { _id: "3", name: "web-development" },
    ],
    stats: {
      upVote: 12,
      downVote: 1,
      views: 245,
      answer: 3,
    },
    createdAt: new Date("2024-06-12T14:23:45.678Z").toISOString(),
  },
  {
    _id: "2",
    title: "What is the difference between let and var in JavaScript?",
    author: {
      _id: "2",
      name: "JohnSmith",
      profileUrl: "",
    },
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "es6" },
      { _id: "3", name: "programming" },
    ],
    stats: {
      upVote: 30,
      downVote: 4,
      views: 1020,
      answer: 8,
    },
    createdAt: new Date("2024-06-12T14:23:45.678Z").toISOString(),
  },
  {
    _id: "3",
    title: "How to center a div using CSS?",
    author: {
      _id: "3",
      name: "JaneDoe",
      profileUrl: "",
    },
    tags: [
      { _id: "4", name: "css" },
      { _id: "5", name: "html" },
      { _id: "6", name: "web-design" },
    ],
    stats: {
      upVote: 18,
      downVote: 0,
      views: 560,
      answer: 5,
    },
    createdAt: new Date("2026-01-12T14:23:45.678Z").toISOString(),
  },
];

const FeedData = ({ query, filter }: FeedDataProps) => {
  return (
    <div className="flex flex-col gap-4">
      {MOCK_DATA.map((item) => {
        return <QuestionCard item={item} key={item._id} />;
      })}
    </div>
  );
};

export { FeedData };
