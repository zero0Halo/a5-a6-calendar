import classnames from "classnames";
import dayjs from "dayjs";
import Page from "./Page";
import NavigationItem from "./NavigationItem";

interface DayPageProps {
  dayIndex: number;
  monthIndex: number;
  pageIdentifier: string;
  pageNumber: string;
  pageMode: string;
  year: number;
}

export const MEETINGS = "meetings";
export const TODO = "todo";
export const PAGE_ONE = "page-one";
export const PAGE_TWO = "page-two";

function DayPage({
  dayIndex,
  monthIndex,
  pageIdentifier: identifier,
  pageNumber,
  pageMode,
  year,
}: DayPageProps) {
  const day: string = `${year}-${monthIndex}-${dayIndex}`;
  const formatted = dayjs(day).format("dddd, MMM D, YYYY");
  const pageIdentifier = `${identifier}-${pageMode}-${pageNumber}`;
  const toOtherModeLink = `${identifier}-${
    pageMode === TODO ? MEETINGS : TODO
  }-${PAGE_ONE}`;
  const toOtherPageLink = `${identifier}-${pageMode}-${
    pageNumber === PAGE_ONE ? PAGE_TWO : PAGE_ONE
  }`;

  return (
    <Page className="todo" key={pageIdentifier} pageIdentifier={pageIdentifier}>
      <div className="align-center flex justify-between px-8 pt-8">
        <h2 className="font-bold text-2xl">{formatted}</h2>

        <a className="link-styles" href={`#month-${monthIndex}`}>
          Return
        </a>
      </div>

      <nav className="grid grid-cols-12 mt-4 px-8">
        <NavigationItem
          className={classnames([
            pageMode === TODO ? "active-page-styles" : "link-styles",
            "col-start-5",
            "col-end-7",
            "w-full",
          ])}
          link={pageMode === TODO ? false : toOtherModeLink}
        >
          Todo
        </NavigationItem>
        <NavigationItem
          className={classnames([
            pageMode === MEETINGS ? "active-page-styles" : "link-styles",
            "col-start-7",
            "col-end-9",
            "w-full",
          ])}
          link={pageMode === MEETINGS ? false : toOtherModeLink}
        >
          Meetings
        </NavigationItem>

        <div className="col-start-9 col-span-4">
          <div className="flex justify-end">
            <NavigationItem
              className={
                pageNumber === PAGE_ONE
                  ? "active-page-link-styles"
                  : "page-link-styles"
              }
              link={pageNumber === PAGE_ONE ? false : toOtherPageLink}
            >
              1
            </NavigationItem>
            <NavigationItem
              className={
                pageNumber === PAGE_TWO
                  ? "active-page-link-styles"
                  : "page-link-styles"
              }
              link={pageNumber === PAGE_TWO ? false : toOtherPageLink}
            >
              2
            </NavigationItem>
          </div>
        </div>
      </nav>
    </Page>
  );
}

export default DayPage;
