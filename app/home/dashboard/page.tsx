import Card from "@/app/components/card";
import { DashboardCardArea } from "@/app/components/dashboardCardArea";
import { NewCardModal } from "@/app/components/newCardModal";
import { ShareModal } from "@/app/components/shareModal";

export default async function Dashboard() {

  const currentDate = new Date();

  return (
    <>
      <div className="flex justify-end gap-2">
        <ShareModal />
        <NewCardModal />
      </div>

      <br />

      <DashboardCardArea>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
        <Card Type="Text" Title="test1" Content="testing testing" CreatedAt={currentDate}/>
      </DashboardCardArea>
    </>
  );
}
