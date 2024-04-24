import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Nav() {
  return (
    <div className="pl-8 py-1 grid gap-1">
      <CollapsableFolder folderName={"Home"} folderIcon="folder-home" filenames={["welcome.html"]} />
      <CollapsableFolder folderName={"AboutUs"} folderIcon="folder-enum" filenames={["welcome.html"]} />
      <CollapsableFolder folderName={"Portfolio"}folderIcon="folder-debug" filenames={["welcome.html"]} />
      <CollapsableFolder folderName={"Testimonials"} folderIcon="folder-docs"filenames={["welcome.html"]} />
      <CollapsableFolder folderName={"Contact"} folderIcon="folder-base"filenames={["welcome.html"]} />
    </div>
  );
}

function getFileIcon(filename) {
  const ext = filename.split(".")[1];
  console.log(ext);
  if (ext == "html") return "html.svg";
  return "document.svg";
}

function CollapsableFolder({
  folderName,
  folderIcon = "folder-base",
  filenames,
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="folder">
        <AccordionTrigger onClick={() => window.history.pushState({}, '', `/${folderName.toLowerCase()}`)}>
          <img
            src={`/sidebarAssets/folderIcons/${folderIcon}.svg`}
            height={20}
            width={20}
          />
          {folderName}
        </AccordionTrigger>
        {filenames.map((filename) => {
          return (
            <AccordionContent>
              <div className="flex gap-2">
                <img
                  src={`/sidebarAssets/${getFileIcon(filename)}`}
                  height={20}
                  width={20}
                />
                {filename}
              </div>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}
