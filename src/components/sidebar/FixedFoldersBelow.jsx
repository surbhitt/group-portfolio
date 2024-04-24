export default function FixedFoldersBelow() {
  return (
    <ul className="grid gap-1 pl-10 opacity-60 cursor-default">
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/eslint.svg" height={20} width={20} />
        <p>.eslintrc.cjs </p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/git.svg" height={20} width={20} />
        <p>.gitignore</p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/json.svg" height={20} width={20} />
        <p>components.json</p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/html.svg" height={20} width={20} />
        <p>index.html</p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/jsconfig.svg" height={20} width={20} />
        <p>jsconfig.json </p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/nodejs.svg" height={20} width={20} />
        <p>package-lock.json </p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/nodejs.svg" height={20} width={20} />
        <p>package.json </p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/postcss.svg" height={20} width={20} />
        <p>postcss.config.js </p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/readme.svg" height={20} width={20} />
        <p>README.md</p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/tailwindcss.svg" height={20} width={20} />
        <p>tailwind.config.js </p>
      </li>
      <li className="flex gap-2 ">
        <img src="/sidebarAssets/vite.svg" height={20} width={20} />
        <p>vite.config.js</p>
      </li>
    </ul>
  );
}
