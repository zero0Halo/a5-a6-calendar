import dayjs from "dayjs";
import Page from "./Page";

interface TodoPageProps {
  dayIndex: number;
  monthIndex: number;
  pageIdentifier: string;
  year: number;
}

function TodoPage({
  dayIndex,
  monthIndex,
  pageIdentifier,
  year,
}: TodoPageProps) {
  const day: string = `${monthIndex}-${dayIndex}-${year}`;
  const abrvMonthName = dayjs(day).format("MMM");
  const dayName = dayjs(day).format("dddd");

  return (
    <Page key={pageIdentifier} pageIdentifier={pageIdentifier}>
      <div className="align-center flex justify-between px-8 pt-8">
        <h2 className="font-bold text-2xl">
          {dayName}, {dayIndex} {abrvMonthName}, {year}
        </h2>

        <a
          className="bg-black font-bold text-center text-sm text-white w-24 p-1"
          href={`#month-${monthIndex}`}
        >
          Return
        </a>
      </div>
    </Page>
  );
}

export default TodoPage;
