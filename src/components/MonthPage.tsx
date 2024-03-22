import Page from "./Page";

export interface MonthPageProps {
  monthName: string;
  index: number;
  year: number;
}

function MonthPage({ monthName, index, year }: MonthPageProps) {
  return (
    <Page key={monthName} pageIdentifier={`month-${index}`}>
      <div>
        <a href="#main">Return</a>
      </div>
      <h2>{monthName}</h2>
    </Page>
  );
}
export default MonthPage;
