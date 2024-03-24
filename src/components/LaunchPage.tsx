import dayjs from "dayjs";
import Page from "./Page";
import MonthPage, { MonthPageProps } from "./MonthPage";

interface LaunchPageProps {
  year: number;
}

function getMonthName({
  monthIndex,
  year,
}: {
  monthIndex: number;
  year: number;
}): string {
  return dayjs(`${monthIndex}/1/${year}`).format("MMMM") as string;
}

function LaunchPage({ year }: LaunchPageProps) {
  const months = [...Array(12)].map((_, i) => i + 1);
  const monthsByName = months.map((m) => ({
    monthName: getMonthName({ monthIndex: m, year }),
    monthIndex: m,
    year,
  }));

  return (
    <>
      <Page
        className="flex flex-col align-center justify-evenly"
        pageIdentifier="main"
      >
        {monthsByName.map(({ monthName, monthIndex }) => (
          <div className="flex justify-center" key={monthName}>
            <a
              className="flex justify-center bg-black font-bold text-white w-48 p-1"
              href={`#month-${monthIndex}`}
            >
              {monthName}
            </a>
          </div>
        ))}
      </Page>

      {monthsByName.map(({ monthName, monthIndex, year }) => (
        <MonthPage monthName={monthName} monthIndex={monthIndex} year={year} />
      ))}
    </>
  );
}

export default LaunchPage;
