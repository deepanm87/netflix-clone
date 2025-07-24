import Image from "next/image";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <h1>Netflix</h1>
  );
}
