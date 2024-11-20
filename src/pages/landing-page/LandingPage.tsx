import Header from "./components/Header";
import logo from './../../public/logo.svg';
import Hero from "./components/Hero";
import heroImage from './../../public/hero-image.jpg';
import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard.tsx";
import {FEATURES} from "./constants/features.tsx";
import PricingCard from "./components/PricingCard.tsx";
import {plans} from "./constants/pricing.ts";
import ProfileCard from "./components/ProfileCard.tsx";
import {profiles} from "./constants/profiles.ts";
import Footer from "./components/Footer.tsx";

const info = {
    title: "Bienvenido a BEARHUG el mejor gestor de almacenes en la nube",
    description: "¿Estás cansado de perder información importante debido a fallos en tus dispositivos o sistemas locales? ¡No te preocupes más! Nuestra aplicación de Gestión de Almacenes en la Nube está aquí para ayudarte."
}

const info2 = {
    title: "¿Por qué elegir nuestro Gestor de Almacenes en la Nube?",
    description: "Si aun no estas convencido, te mostramos los beneficios que obtendria tu negocio si te decides por nosotros"
}

const info3 = {
    title: "Conoce los planes que tenemos para ti",
    description: "Empieza ya y decide el plan que mejor le convenga a tu negocio"
}

const info4 = {
    title: "Nuestro equipo",
    description: "En Bearhug Management, nuestro éxito depende del talento y la pasión de nuestro equipo, quienes con su experiencia e innovación ofrecen soluciones excepcionales. Conoce a quienes lo hacen posible."
}
const company = "Bearhug Management";
const links = ["#","#","#"];

export default function LandingPage() {
    return (
        <>
            <Header company={company} image={logo}/>
            <Hero image={heroImage} title={info.title} description={info.description}/>
            <Section title={info2.title} description={info2.description}>
                {
                    FEATURES.map((item, index) => (
                        <FeatureCard key={index} color={item.color} title={item.title} description={item.description}
                                     icon={item.icon}/>
                    ))
                }
            </Section>
            <Section title={info3.title} description={info3.description}>
                {
                    plans.map((item, index) => (
                        <PricingCard key={index} title={item.title} price={item.price} features={item.features}
                                     isPopular={!!item.isPopular}/>
                    ))
                }
            </Section>
            <Section title={info4.title} description={info4.description}>
                {profiles.map((item, index) => (
                    <ProfileCard key={index} photo={item.photo} name={item.name} rol={item.rol} biography={item.biography} socialMediaUrl={item.socialMediaUrl}/>
                ))}
            </Section>
            <Footer logo={logo} company={company} socialMediaUrl={links}/>
        </>
    )
}
