import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="h-1/2 bg-pink-200">
        I love pink!
      </div>
      <div className="h-1/2 bg-sky-200">
        and sky!
      </div>
    </div>
  );
}
