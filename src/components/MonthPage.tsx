import dayjs from "dayjs";
import Page from "./Page";
import TodoPage from "./TodoPage";

export interface MonthPageProps {
  monthName: string;
  monthIndex: number;
  year: number;
}

const headerStyle =
  "bg-gray-200 border-solid border-2 flex flex-col h-8 justify-center items-center m-1 p-1 self-end w-16";
const cellStyle =
  "bg-black  flex flex-col font-bold h-16 justify-center items-center m-1 p-1 text-white w-16";
const blankStyle = "bg-slate-100";

function MonthPage({ monthName, monthIndex, year }: MonthPageProps) {
  const monthStartString: string = `${year}-${monthIndex}-1`;
  const daysInMonth: number = dayjs(monthStartString).daysInMonth();
  const dayStartIndex: number = dayjs(monthStartString).day();
  let count = 0;
  const daysArray = [...new Array(42)].map((_, i) => {
    if (i >= dayStartIndex && count < daysInMonth) {
      return (count += 1);
    }
    return i + "-blank";
  });

  return (
    <>
      <Page key={`month-${monthIndex}`} pageIdentifier={`month-${monthIndex}`}>
        <div className="align-center flex justify-between px-8 pt-8">
          <h2 className="font-bold text-2xl">
            {monthName}, {year}
          </h2>

          <a
            className="self-center bg-black font-bold text-center text-sm text-white w-24 p-1"
            href="#main"
          >
            Return
          </a>
        </div>

        <div className="grid grid-cols-7 grid-rows-7 m-6">
          <div className={headerStyle}>Su</div>
          <div className={headerStyle}>M</div>
          <div className={headerStyle}>T</div>
          <div className={headerStyle}>W</div>
          <div className={headerStyle}>Th</div>
          <div className={headerStyle}>F</div>
          <div className={headerStyle}>Sa</div>

          {daysArray.map((m) => (
            <a
              className={typeof m !== "string" ? cellStyle : blankStyle}
              href={`#month-${monthIndex}-${m}`}
              key={`month-${monthIndex}-${m}`}
            >
              {typeof m !== "string" ? m : ""}
            </a>
          ))}
        </div>
      </Page>

      {[...new Array(daysInMonth)].map((_, i) => (
        <>
          <TodoPage
            dayIndex={i}
            meetingToggled={false}
            monthIndex={monthIndex}
            key={`${monthName}-${i + 1}`}
            pageIdentifier={`month-${monthIndex}-${i + 1}`}
            year={year}
          />

          <TodoPage
            dayIndex={i}
            meetingToggled={true}
            monthIndex={monthIndex}
            key={`${monthName}-${i + 1}-meeting`}
            pageIdentifier={`month-${monthIndex}-${i + 1}`}
            year={year}
          />
        </>
      ))}
    </>
  );
}
export default MonthPage;
