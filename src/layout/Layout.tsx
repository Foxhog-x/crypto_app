import NavLinks from "../components/NavLinks";
import Header from "./Header";
type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex">
        <div className="min-h-screen overflow-hidden shadow-md border border-black w-48 sm:block hidden">
          <div className="flex gap-1 items-center border-b border-black p-5">
            <img
              className="w-12 h-12 rounded"
              src="https://desk.zoho.in/portal/api/kbCategory/128151000000183204/logo/4063298000000006001?orgId=60024680820"
              alt="Default avatar"
            />
            <div className="flex-wrap">
              <h3 className="text-2xl">Tradex</h3>
            </div>
          </div>
          <NavLinks />
        </div>
        <div className="flex-1 min-h-screen ">
          <Header />
          <main className="flex gap-2 border h-[90.55%] p-1">{children}</main>
        </div>
      </div>
    </>
  );
}
