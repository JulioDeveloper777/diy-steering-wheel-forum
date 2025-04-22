import { syncUser } from "@/actions/user-actions";
import { ClientHome } from "@/components/landing/ClientHome";

export default async function Home() {
  await syncUser();
  return <ClientHome />;
}
