import Explorer from "./Explorer";
import Pages from "./Pages";
import SideBar from "./SideBar";

function Main() {
  return (
    <main className=" flex">
      <SideBar />
      <Explorer />
      <Pages />
    </main>
  );
}

export default Main;
