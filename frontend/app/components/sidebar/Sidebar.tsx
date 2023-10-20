
// controls sidebar for children

import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

async function Sidebar({ children }: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();  // great for keeping current user throughout page
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">
      {children}
      </main>
    </div>
  )
}

export default Sidebar;