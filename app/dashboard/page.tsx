import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session) {
    return <div>Not authenticated!</div>
  }

  return (
    <div>
      <div>Welcome, ${session.user.name}</div>
      <div>email: ${session.user.email}</div>
    </div>
  )
}
