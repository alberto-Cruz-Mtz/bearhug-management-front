import Header from "./components/Header";
import logo from './../../public/logo.svg';
import Hero from "./components/Hero";
import heroImage from './../../public/hero-image.jpg';
import Section from "./components/Section";
import Card from "./components/Card";
import LockIcon from "./icon/LockIcon";
import { FEATURES } from "./constants/features";

const info = {
  title: "Bienvenido a BEARHUG el mejor gestor de almacenes en la nube",
  description: "¿Estás cansado de perder información importante debido a fallos en tus dispositivos o sistemas locales? ¡No te preocupes más! Nuestra aplicación de Gestión de Almacenes en la Nube está aquí para ayudarte."
}

const info2 = {
  title: "¿Por qué elegir nuestro Gestor de Almacenes en la Nube?",
  description: "Si aun no estas convencido, te mostramos los beneficios que obtendria tu negocio si te decides por nosotros"
}

export default function LandingPage() {
  return (
    <>
      <Header title="Bearhug Management" image={logo}/>
      <Hero image={heroImage} title={info.title} description={info.description}/>
      <Section title={info2.title} description={info2.description}>
        {
          FEATURES.map((element, index) => (
            <Card key={index} color="blue-200" title={element.title} description={element.description} icon={<LockIcon className="text-blue-600"/>}/>
          ))
        }
      </Section>
    </>
  )
}
