import { useEffect } from "react";
import { useRouter } from "next/router";

function Root(): void {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);
}

export default Root;
