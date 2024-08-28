import { db } from "@/db";
import { notFound } from "next/navigation";

const Page = async ({ searchParams }: SearchParamProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;

  return <div>{id}</div>;
};

export default Page;
