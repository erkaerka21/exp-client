import Image from "next/image";
import { Inter } from "next/font/google";
import ProfileTable from "@/components/profile-table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-6xl text-center">User information</h1>
      <ProfileTable />
    </main>
  );
}
