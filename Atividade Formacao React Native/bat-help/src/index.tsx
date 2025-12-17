import { useState } from "react";
import ActiveBatSinal from "./ActiveBatSinal/ActiveBatSinal";
import { PostName } from "./PostName/PostName";

export default function Home () {
  const [screen, setScreen] = useState<"signal" | "form">("signal");

  return (
    screen === "signal" ? (
      <ActiveBatSinal onActivate={() => setScreen("form")} />
    ) : (
      <PostName onBack={() => setScreen("signal")} />
    )
  );
}
