import dayjs from "dayjs";
import Page from "./Page";
import MonthPage, { MonthPageProps } from "./MonthPage";

interface LaunchPageProps {
  noWeekend: boolean;
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

function LaunchPage({ noWeekend, year }: LaunchPageProps) {
  const months = [...Array(12)].map((_, i) => i + 1);
  const monthsByName = months.map((m) => ({
    monthName: getMonthName({ monthIndex: m, year }),
    monthIndex: m,
    noWeekend,
    year,
  }));

  return (
    <>
      <Page
        className="flex flex-col align-center justify-evenly"
        pageIdentifier="main"
      >
        <h1 className="text-center text-5xl">{year} Planner</h1>

        {monthsByName.map(({ monthName, monthIndex }) => (
          <div className="flex justify-center" key={monthName}>
            <a
              className="self-center flex justify-center bg-black font-bold text-white w-48 p-1"
              href={`#month-${monthIndex}`}
              key={monthName}
            >
              {monthName}
            </a>
          </div>
        ))}
      </Page>

      {monthsByName.map(({ monthName, monthIndex, year }) => (
        <MonthPage
          monthName={monthName}
          monthIndex={monthIndex}
          noWeekend={noWeekend}
          year={year}
        />
      ))}
    </>
  );
}

export default LaunchPage;
