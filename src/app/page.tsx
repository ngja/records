import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div>
        <Button asChild>
          <Link href="/dashboard">
            시작하기
          </Link>
        </Button>
      </div>
    </div>
  );
}
