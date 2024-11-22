import FormAuth from "./components/FormAuth.tsx";
import Header from "../core/components/Header.tsx";
import logo from "../public/logo.svg";
import {useState} from "react";

const company = "Bearhug Management";
export default function Auth(){
    const [isValid, setIsValid] = useState(true);
    return (
        <>
            <Header image={logo} company={company} />
            <FormAuth isValid={isValid} setIsValid={setIsValid} title="Registrate ahora"/>
        </>
    )
}