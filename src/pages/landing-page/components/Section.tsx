import { ReactNode } from "react"


interface SectionProps {
    title: string,
    description: string,
    children: ReactNode
}

export default function Section({ title, description, children }: SectionProps) {
    return (
        <section className="px-5 py-4 space-y-12">
            <article className="text-center md:w-1/2 md:mx-auto">
                <h4 className="font-bold text-2xl">{title}</h4>
                <p className="mt-6">{description}</p>
            </article>
            {children}
        </section>
    )
}
