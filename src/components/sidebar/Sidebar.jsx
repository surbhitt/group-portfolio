import FixedFoldersAbove from "./FixedFoldersAbove";
import FixedFoldersBelow from "./FixedFoldersBelow";
import Nav from "./Nav";
import { CollapsedArrow, ExpandedArrow, HorizontalDots } from "./Icons";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between text-sm w-80 text-zinc-300 bg-zinc-800 h-screen">
      <div className="w-full">
        <div className="px-5 pt-3 pb-2 flex items-center justify-between w-full">
          <p>EXPLORER</p>
          <HorizontalDots />
        </div>
        <div>
          <div className="opacity-60 font-bold px-2 py-1 flex items-center gap-1">
            <ExpandedArrow width={15} />
            <p>PROJECT</p>
          </div>
          <FixedFoldersAbove />
          <Nav />
          <FixedFoldersBelow />
        </div>
      </div>
      <div className="w-full opacity-60">
        <div className="flex items-center px-2 py-1 border-y border-zinc-500">
          <CollapsedArrow />
          <div className="font-bold">OUTLINE</div>
        </div>
        <div className="flex items-center px-2 pt-1">
          <CollapsedArrow />
          <div className="font-bold">TIMELINE</div>
        </div>
      </div>
    </div>
  );
}
