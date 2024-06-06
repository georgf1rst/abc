import { UserButton } from "@clerk/nextjs";
import { UserProfile } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <div className="flex justify-center align-center">
      This is a protected page
    </div>
    <UserButton afterSignOutUrl="/" />
    </>
  );
}
