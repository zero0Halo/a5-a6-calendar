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

export const activePageStyles =
  "active-page bg-white border-solid border-2 font-bold p-1 self-auto text-center text-sm text-black w-24";
export const linkStyles =
  "bg-black border-black border-solid border-2 font-bold p-1 self-auto text-center text-sm text-white w-24";
const activePageLinkStyles = classnames([activePageStyles, "self-auto", "w-8"]);
const pageLinkStyles = classnames([linkStyles, "self-auto", "w-8"]);

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
    <>
      <Page
        className="todo"
        key={pageIdentifier}
        pageIdentifier={pageIdentifier}
      >
        <div className="align-center flex justify-between px-8 pt-8">
          <h2 className="font-bold text-2xl">{formatted}</h2>

          <a className={linkStyles} href={`#month-${monthIndex}`}>
            Return
          </a>
        </div>

        <nav className="grid grid-cols-12 mt-4 px-8">
          <NavigationItem
            className={classnames([
              pageMode === TODO ? activePageStyles : linkStyles,
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
              pageMode === MEETINGS ? activePageStyles : linkStyles,
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
                    ? activePageLinkStyles
                    : pageLinkStyles
                }
                link={pageNumber === PAGE_ONE ? false : toOtherPageLink}
              >
                1
              </NavigationItem>
              <NavigationItem
                className={
                  pageNumber === PAGE_TWO
                    ? activePageLinkStyles
                    : pageLinkStyles
                }
                link={pageNumber === PAGE_TWO ? false : toOtherPageLink}
              >
                2
              </NavigationItem>
            </div>
          </div>
        </nav>

        {/* <nav className="align-middle justify-center absolute bottom-5 flex gap-2 right-8">
          <NavigationItem
            className={
              pageNumber === PAGE_ONE ? activePageLinkStyles : pageLinkStyles
            }
            link={pageNumber === PAGE_ONE ? false : toOtherPageLink}
          >
            1
          </NavigationItem>
          <NavigationItem
            className={
              pageNumber === PAGE_TWO ? activePageLinkStyles : pageLinkStyles
            }
            link={pageNumber === PAGE_TWO ? false : toOtherPageLink}
          >
            2
          </NavigationItem>
        </nav> */}
      </Page>
    </>
  );
}

export default DayPage;
