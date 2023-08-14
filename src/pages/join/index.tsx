import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Join(): React.ReactElement {
  const router = useRouter();
  const { query } = router;
  const code: string = query.code as string;

  useEffect(() => {
    if (code) {
      router.push(`/login?code=${code}`);
    }
  }, [code, router]);

  return <></>;
}

export default Join;
