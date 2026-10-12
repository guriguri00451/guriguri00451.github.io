import Link from "next/link";
import { works } from "@/data/works";
import { WorkList } from "@/components/WorkList";

export const metadata = { title: "Works" };

export default function Works() {
  return (
    <main>
      <p><Link href="/">← Home</Link></p>
      <h1>Works</h1>
      <WorkList items={works} />
    </main>
  );
}
