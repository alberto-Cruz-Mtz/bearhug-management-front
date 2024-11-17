import { Image } from "@nextui-org/image";

interface HeroProps {
  title: string,
  description: string,
  image: string,
}

export default function Hero({ title, description, image }: HeroProps) {
  return (
    <main className="h-[90svh] px-6 py-4 text-center flex flex-col gap-6 items-center">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="">{description}</p>
      <Image
        width={350}
        height={230}
        className="rounded-md"
        alt="Hero Image"
        src={image} />
    </main>
  )
}
