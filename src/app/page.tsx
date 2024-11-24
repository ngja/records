import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <Button asChild>
          <Link href="/dashboard">
            Start
          </Link>
        </Button>
      </div>
    </div>
  );
}
