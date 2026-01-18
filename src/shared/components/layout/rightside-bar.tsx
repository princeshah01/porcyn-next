import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { TagBadgeList } from "~/shared/components/tag-badge";
// Mock Data
const TOP_QUESTIONS = [
  {
    _id: "1",
    title: "How to implement authentication in React?",
  },
  {
    _id: "2",
    title: "What is the difference between useEffect and useLayoutEffect?",
  },
  {
    _id: "3",
    title: "How to optimize React application performance?",
  },
  {
    _id: "4",
    title: "What are React hooks and how to use them?",
  },
  {
    _id: "5",
    title: "How to manage state in large React applications?",
  },
  {
    _id: "6",
    title: "What is the virtual DOM in React?",
  },
];

const TOPTAGS = [
  {
    _id: "4",
    name: "typescript",
    count: 600,
  },
  {
    _id: "5",
    name: "express",
    count: 500,
  },
  { _id: "6", name: "mongodb", count: 400 },
  { _id: "7", name: "next js", count: 300 },
  { _id: "8", name: "redux", count: 200 },
];

const TopQuestions = () => {
  return (
    <ul className="flex flex-col gap-2 text-xs">
      {TOP_QUESTIONS.map((question) => (
        <Link
          href={`/questions/${question._id}`}
          key={question._id}
          className="text-foreground/70 hover:text-foreground hover:bg-accent/50 flex min-h-6 cursor-pointer items-center justify-between rounded-md px-1 py-0.5"
        >
          <span className="w-[92%] text-wrap">{question.title}</span>
          <ChevronRight className="w-[7%]" size={15} />
        </Link>
      ))}
    </ul>
  );
};

const RightSideBar = () => {
  return (
    <aside className="border-border/80 fixed top-14 right-0 hidden h-[calc(100vh-3.5rem)] w-[16rem] shrink-0 flex-col border-l p-4 pt-10 lg:flex xl:w-[20rem]">
      <div className="flex min-h-64 w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-4">
          <h3 className="text-foreground text-sm font-medium">Top Questions</h3>
        </div>
        <TopQuestions />
      </div>

      <div className="mt-8 flex w-full flex-col gap-4">
        <h3 className="text-foreground text-sm font-medium">Popular Tags</h3>
        <TagBadgeList tags={TOPTAGS} showCount />
      </div>
    </aside>
  );
};
export { RightSideBar };
