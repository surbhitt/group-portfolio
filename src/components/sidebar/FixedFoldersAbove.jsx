import { CollapsedArrow, ExpandedArrow } from "./Icons";

export default function FixedFoldersAbove() {
  return (
    <div className="pl-4 pr-2 opacity-70 cursor-default">
      <ul className="grid gap-[0.15rem]">
        <li className="flex gap-2 items-center">
          <CollapsedArrow />
          <img src="/sidebarAssets/folderIcons/folder-node.svg" height={20} width={20} />
          <p>node_modules</p>
        </li>
        <li className="flex gap-2 items-center">
          <CollapsedArrow />
          <img src="/sidebarAssets/folderIcons/folder-public.svg" height={20} width={20} />
          <p>public</p>
        </li>
        <li className="flex gap-2 items-center">
          <ExpandedArrow />
          <img
            src="/sidebarAssets/folderIcons/folder-src-open.svg"
            height={20}
            width={20}
          />
          <p>src</p>
        </li>
        <li className="flex gap-2 items-center pl-2">
          <ExpandedArrow />
          <img
            src="/sidebarAssets/folderIcons/folder-components-open.svg"
            height={20}
            width={20}
          />
          <p>components</p>
        </li>
      </ul>
    </div>
  );
}
