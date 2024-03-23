import dayjs from "dayjs";
import Page from "./Page";

export interface MonthPageProps {
  monthName: string;
  index: number;
  year: number;
}

const headerStyle =
  "bg-gray-200 border-solid border-2 flex flex-col h-8 justify-center items-center m-1 p-1 self-end w-16";
const cellStyle =
  "bg-black  flex flex-col font-bold h-16 justify-center items-center m-1 p-1 text-white w-16";
const blankStyle = "bg-slate-100";

function MonthPage({ monthName, index, year }: MonthPageProps) {
  const monthStartString = `${index}/1/${year}`;
  const daysInMonth = dayjs(monthStartString).daysInMonth();
  const dayStartIndex = dayjs(monthStartString).day();
  let count = 0;
  const daysArray = [...new Array(42)].map((_, i) => {
    if (i + 1 >= dayStartIndex && count < daysInMonth) {
      return (count += 1);
    }
    return 0;
  });

  return (
    <Page key={monthName} pageIdentifier={`month-${index}`}>
      <div className="align-center flex justify-between px-8 pt-8">
        <h2 className="font-bold text-2xl">
          {monthName}, {year}
        </h2>

        <a
          className="bg-black font-bold text-center text-sm text-white w-24 p-1"
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
          <a className={m > 0 ? cellStyle : blankStyle} href="#">
            {m > 0 ? m : ""}
          </a>
        ))}
      </div>
    </Page>
  );
}
export default MonthPage;
