"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <>
      <section className="w-full h-[100%] flex items-center justify-center flex-col">
        <h1 className="text-slate-700 font-bold text-center text-3xl mb-4">Indian Space Research Organisation</h1>
        <p className="text-center text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          voluptate voluptates, est, inventore ullam cupiditate, iste corrupti
          fuga maxime nam quis molestias quae necessitatibus minus! Maxime, esse
          non rem voluptatum obcaecati magni, fugit provident inventore expedita
          nihil dolore facere. Illum sapiente possimus dolorem quo reiciendis,
          voluptatum consequatur qui facilis quisquam voluptates, dignissimos a
          nisi repellat. Illo perferendis ab aliquam suscipit?
        </p>
      </section>
    </>
  );
};

export default page;
