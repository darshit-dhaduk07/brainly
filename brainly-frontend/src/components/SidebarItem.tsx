import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex gap-3 items-center p-3 items-center cursor-pointer text-gray-700 hover:bg-gray-200 rounded-lg ">
      {icon}
      {text}
    </div>
  );
}
