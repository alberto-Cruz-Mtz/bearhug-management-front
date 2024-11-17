import { JSX } from "react"

interface CardProps {
    icon: JSX.Element,
    title: string,
    description: string,
    color?: string
}

export default function Card({ icon, title, description, color }: CardProps) {
  return (
    <article className='w-[calc(100%-10%)] space-y-2 mx-auto py-8 rounded-md border-2 border-gray-300 p-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
        <span className={`p-1 bg-${color} rounded-lg inline-block`}>{icon}</span>
        <h6 className="font-bold text-2xl">{title}</h6>
        <p>{description}</p>
    </article>
  )
}
