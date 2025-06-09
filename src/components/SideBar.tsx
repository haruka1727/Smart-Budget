import logo from "../assets/logo.png";
import Footer from "./Footer";

function SideBar() {
  return (
    <>
      <aside className="flex h-screen w-64 bg-blue-300 text-black flex flex-col justify-between">
        <div>
          <img src={logo} alt="Logo" />

          <nav className="flex flex-col p-4 space-y-2">
            <a
              href="/dashboard"
              className="px-3 py-2 rounded hover:bg-gray-100"
            >
              Dashboard
            </a>
            <a
              href="/transactions"
              className="px-3 py-2 rounded hover:bg-gray-100"
            >
              Transactions
            </a>
            <a href="/budgets" className="px-3 py-2 rounded hover:bg-gray-100">
              Budgets
            </a>
            <a
              href="/planned-expenses"
              className="px-3 py-2 rounded hover:bg-gray-100"
            >
              Planned expenses
            </a>
          </nav>
        </div>
        <Footer />
      </aside>
    </>
  );
}

export default SideBar;
