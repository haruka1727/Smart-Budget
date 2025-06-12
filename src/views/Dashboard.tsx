import DefaultCell from "../components/Utilities components/DefaultCell";
import { DefaultRow } from "../components/Utilities components/DefaultRow";
import { DefaultView } from "../components/Utilities components/DefaultView";

function Dashboard() {
  return (
    <DefaultView>
      <DefaultRow>
        <DefaultCell>
          <div className="w-50 h-50 bg-green-200"></div>
        </DefaultCell>

        <DefaultCell>
          <div className="w-100 h-50 bg-green-200"></div>
        </DefaultCell>
      </DefaultRow>

      <DefaultRow>
        <DefaultCell>
          <div className="w-50 h-50 bg-green-200"></div>
        </DefaultCell>

        <DefaultCell>
          <div className="w-100 h-50 bg-green-200"></div>
        </DefaultCell>
      </DefaultRow>
    </DefaultView>
  );
}

function Table({
  data,
  title,
  isTableHeaderPresent,
  customFormatters,
}: {
  data: any[];
  title: string | undefined;
  isTableHeaderPresent: boolean;
  customFormatters?: {
    [key: string]: (value: any) => React.ReactNode;
  };
}) {
  if (!data || data.length === 0) {
    return null;
  }

  const headers = isTableHeaderPresent ? Object.keys(data[0]) : [];

  return (
    <div className="table-container">
      {title && <h2>{title}</h2>}
      <table className="dynamic-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => {
                const value = row[header];
                let displayValue = value;

                // Apply custom formatter if exists
                if (customFormatters && customFormatters[header]) {
                  displayValue = customFormatters[header](value);
                }
                // Default formatting for Date objects
                else if (value instanceof Date) {
                  displayValue = value.toLocaleDateString();
                }
                // Format numbers with 2 decimal places
                else if (
                  typeof value === "number" &&
                  header.toLowerCase().includes("amount")
                ) {
                  displayValue = value.toFixed(2);
                }

                return <td key={`${rowIndex}-${header}`}>{displayValue}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
