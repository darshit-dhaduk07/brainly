import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { Plusicon } from "../icon/Plusicon";
import { Shareicon } from "../icon/Shareicon";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-80 bg-gray-100 min-h-screen border-l-2 border-l-gray-400">
        <div className="flex justify-end gap-2">
          <CreateContentModel
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
          <Button
            text="Add Content"
            varient="secondary"
            size="lg"
            startIcon={<Plusicon size="md" />}
            onClick={() => {
              setModalOpen(true);
            }}
          />
          <Button
            text="Share Brain"
            varient="primary"
            size="lg"
            startIcon={<Shareicon size="md" />}
            onClick={() => {
              console.log("Done");
            }}
          />
        </div>

        <div className="flex gap-2">
          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=i3y8Xl_BFPA"
            title="Youtube Video"
          />
          <Card
            type="twitter"
            link="https://x.com/elonmusk/status/1999191370955669904"
            title="Twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
