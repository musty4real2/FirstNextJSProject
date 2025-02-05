import Image from "next/image";
import Hello from "@/app/components/hello";
export default function Home() {
  // console.log("What am i doing here ? -- SERVER/CLIENT");
  //   throw new Error("NOT IMPLEMENTED");
  return (
      <>
      <h1 className="text-3xl">Welcome to NextJS.</h1>
        <Hello/>
      </>
  );
}
