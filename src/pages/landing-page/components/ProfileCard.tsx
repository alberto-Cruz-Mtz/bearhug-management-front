import FacebookIcon from "../icon/FacebookIcon.tsx";
import TwitterIcon from "../icon/TwitterIcon.tsx";
import InstagramIcon from "../icon/InstagramIcon.tsx";

type ProfileProps = {
    photo: string
    name: string
    rol: string
    biography: string
    socialMediaUrl: string[]
}

export default function ProfileCard({ rol, biography, socialMediaUrl, name, photo}: ProfileProps){
    return(
        <article className="px-4">
            <figure className="grid justify-items-center">
                <img className="w-48 h-48 object-cover rounded-md" src={photo} alt="profile photo" />
            </figure>
            <blockquote className="text-center">
                <h6 className="font-[Poppins] text-xl">{name}</h6>
                <h6 className="font-[Poppins] text-lg text-gray-500">{rol}</h6>
                <p className="font-[Poppins] mt-3">{biography}</p>
            </blockquote>
            <ul className="flex gap-4 pt-4 justify-center">
                <li><a href={socialMediaUrl[0]}><FacebookIcon/></a></li>
                <li><a href={socialMediaUrl[1]}><TwitterIcon/></a></li>
                <li><a href={socialMediaUrl[2]}><InstagramIcon/></a></li>
            </ul>
        </article>
    )
}