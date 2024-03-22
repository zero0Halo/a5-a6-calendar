import dayjs from "dayjs";
import Page from "./Page";

function LaunchPage({ year }) {
  const months = [...Array(12)].map((_, i) => i + 1);
  const monthsByName = months.map((m) => ({displayName: dayjs(`${m}/1/${year}`).format('MMMM'), index: m } ))

  return (
    <>
      <Page id="main">
        {monthsByName.map(({displayName, index}) =>
          <div key={displayName}><a href={`#month-${index}`}>{displayName}</a></div>
        )}
      </Page>

      {monthsByName.map(({displayName, index}) => <Page key={displayName} pageNumber={`month-${index}`}>{displayName}</Page>)}
    </>
  );
}

export default LaunchPage;