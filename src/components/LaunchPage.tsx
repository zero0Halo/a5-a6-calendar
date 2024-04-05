import dayjs from "dayjs";
import Page from "./Page";
import MonthPage from "./MonthPage";

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
              className="month-button"
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
          key={monthName}
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
