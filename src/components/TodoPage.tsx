import dayjs from "dayjs";
import Page from "./Page";

interface TodoPageProps {
  dayIndex: number;
  monthIndex: number;
  meetingToggled: boolean;
  pageIdentifier: string;
  year: number;
}

const activePageStyles =
  "active-page bg-white border-solid border-2 font-bold p-1 self-center text-center text-sm text-black w-24";
const linkStyles =
  "bg-black font-bold p-1 self-end text-center text-sm text-white w-24";

function TodoPage({
  dayIndex,
  monthIndex,
  meetingToggled,
  pageIdentifier,
  year,
}: TodoPageProps) {
  const day: string = `${year}-${monthIndex}-${dayIndex + 1}`;
  const formatted = dayjs(day).format("dddd, MMM D, YYYY");

  return (
    <>
      <Page
        className="todo"
        key={pageIdentifier + (meetingToggled ? "-meeting" : "")}
        pageIdentifier={pageIdentifier + (meetingToggled ? "-meeting" : "")}
      >
        <div className="align-center flex justify-between px-8 pt-8">
          <h2 className="font-bold text-2xl">{formatted}</h2>

          <a className={linkStyles} href={`#month-${monthIndex}`}>
            Return
          </a>
        </div>

        <nav className="flex justify-center gap-4 mt-4">
          {!meetingToggled && (
            <>
              <div className={activePageStyles}>To Do</div>
              <a
                href={"#" + pageIdentifier + "-meeting"}
                className={linkStyles}
              >
                Meetings
              </a>
            </>
          )}

          {meetingToggled && (
            <>
              <a href={"#" + pageIdentifier} className={linkStyles}>
                To Do
              </a>
              <div className={activePageStyles}>Meetings</div>
            </>
          )}
        </nav>
      </Page>
    </>
  );
}

export default TodoPage;
