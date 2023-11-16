import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import image1 from "@/public/images/download (1).jpeg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users/new">newUser</Link>
      <ProductCard />
    </main>
  );
  // return (
  //   <main>
  //     {/* <Image
  //       src={image1}
  //       alt="imageOne"
  //       quality={80}
  //       priority
  //       sizes="(max-width: 480px) 100vw, (max-widht: 768px) 50vw, 33vw)"
  //       className="object-cover"
  //       style={{ width: "100%", height: "auto" }}
  //     /> */}
  //   </main>
  // );
}
