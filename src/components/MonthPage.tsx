import dayjs from "dayjs";
import Page from "./Page";
import DayPage, { MEETINGS, PAGE_ONE, PAGE_TWO, TODO } from "./DayPage";
import { Fragment } from "react";

export interface MonthPageProps {
  monthName: string;
  monthIndex: number;
  noWeekend: boolean;
  year: number;
}

function MonthPage({ monthName, monthIndex, noWeekend, year }: MonthPageProps) {
  const monthStartString = `${year}-${monthIndex}-1`;
  const daysInMonth: number = dayjs(monthStartString).daysInMonth();
  const dayStartIndex: number = dayjs(monthStartString).day();
  let count = 0;
  const daysArray = [...new Array(42)].map((_, i) => {
    if (i >= dayStartIndex && count < daysInMonth) {
      count += 1;

      const dayOfWeek = +dayjs(`${year}-${monthIndex}-${count}`).format("d");
      const isWeekday = noWeekend ? dayOfWeek > 0 && dayOfWeek < 6 : true;

      return { index: count, isBlank: false, isWeekday };
    }
    return { index: i, isBlank: true, isWeekday: false };
  });

  return (
    <>
      <Page key={`month-${monthIndex}`} pageIdentifier={`month-${monthIndex}`}>
        <div className="align-middle flex justify-between px-8 pt-8">
          <h2 className="font-bold text-2xl">
            {monthName}, {year}
          </h2>

          <a
            className="self-end bg-black font-bold text-center text-sm text-white w-24 p-1"
            href="#main"
          >
            Return
          </a>
        </div>

        <div className="grid grid-cols-7 grid-rows-7 m-6">
          <div className="header-style">Su</div>
          <div className="header-style">M</div>
          <div className="header-style">T</div>
          <div className="header-style">W</div>
          <div className="header-style">Th</div>
          <div className="header-style">F</div>
          <div className="header-style">Sa</div>

          {/* Blank cells intentionally remain links for Supernote compatibility. */}
          {daysArray.map((day) => (
            <a
              className={
                day.isBlank
                  ? "blank-style"
                  : day.isWeekday
                    ? "cell-style"
                    : "weekend-style"
              }
              href={`#month-${monthIndex}-${day.index}-${TODO}-${PAGE_ONE}`}
              key={`month-${monthIndex}-${day.isBlank && "blank-"}${
                day.index
              }-${TODO}-${PAGE_ONE}`}
            >
              {!day.isBlank ? day.index : ""}
            </a>
          ))}
        </div>
      </Page>

      {daysArray.map(({ index, isBlank, isWeekday }) =>
        isBlank || !isWeekday ? null : (
          <Fragment key={`month-${monthIndex}-${index}-pages`}>
            <DayPage
              dayIndex={index}
              monthIndex={monthIndex}
              key={`month-${monthIndex}-${index}-${TODO}-${PAGE_ONE}`}
              pageIdentifier={`month-${monthIndex}-${index}`}
              pageMode={TODO}
              pageNumber={PAGE_ONE}
              year={year}
            />

            <DayPage
              dayIndex={index}
              monthIndex={monthIndex}
              key={`month-${monthIndex}-${index}-${TODO}-${PAGE_TWO}`}
              pageIdentifier={`month-${monthIndex}-${index}`}
              pageMode={TODO}
              pageNumber={PAGE_TWO}
              year={year}
            />

            <DayPage
              dayIndex={index}
              monthIndex={monthIndex}
              key={`month-${monthIndex}-${index}-${MEETINGS}-${PAGE_ONE}`}
              pageIdentifier={`month-${monthIndex}-${index}`}
              pageMode={MEETINGS}
              pageNumber={PAGE_ONE}
              year={year}
            />

            <DayPage
              dayIndex={index}
              monthIndex={monthIndex}
              key={`month-${monthIndex}-${index}-${MEETINGS}-${PAGE_TWO}`}
              pageIdentifier={`month-${monthIndex}-${index}`}
              pageMode={MEETINGS}
              pageNumber={PAGE_TWO}
              year={year}
            />
          </Fragment>
        ),
      )}
    </>
  );
}
export default MonthPage;
