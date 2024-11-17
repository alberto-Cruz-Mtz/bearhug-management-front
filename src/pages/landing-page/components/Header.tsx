import { Switch } from "@nextui-org/switch"
import SunIcon from "../icon/SunIcon"
import MoonIcon from "../icon/MoonIcon"

interface HeaderProps {
    image: string,
    title: string
}

export default function Header({ image, title }: HeaderProps) {
    return (
        <header className="h-[10-svh] flex justify-between px-4 py-3 border-b-2 border-zinc-700">
            <article className="flex items-center gap-2">
                <img className="w-10" src={image} alt="logo" />
                <h1 className="text-xl">{title}</h1>
            </article>

            <Switch
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon />
                    ) : (
                        <MoonIcon />
                    )
                }
            />
        </header>
    )
}
