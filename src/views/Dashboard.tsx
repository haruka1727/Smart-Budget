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

export default Dashboard;
