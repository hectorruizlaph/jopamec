import axios from "axios";
import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { validate } from "../../utils/mailValidate";
import Input from "./Input";
import TextArea from "./TextArea";
interface IValues {
    name: string;
    email: string;
    message: string;
}
interface IErrors extends Partial<IValues> { }
export const Form = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<IErrors>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [messageState, setMessageState] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(values);
        if (errors && Object.keys(errors).length > 0) {
            return setErrors(errors);
        }
        setErrors({});
        setLoading(true);
        axios
            .post("/api/mail", {
                name: values.name,
                email: values.email,
                message: values.message,
            })
            .then((res) => {
                if (res.status === 200) {
                    setValues({ name: "", email: "", message: "" });
                    setLoading(false);
                    setSuccess(true);
                    setMessageState(res.data.message);
                } else {
                    setLoading(false);
                    setMessageState(res.data.message);
                }
            })
            .catch((err) => {
                setLoading(false);
                setMessageState(String(err.message));
            });
        setLoading(false);
    };
    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValues((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <form onSubmit={handleSubmit}>
            <Input
                value={values.name}
                onChange={handleChange}
                id="name"
                name="name"
                label="Nombre"
                placeholder="nombre"
                error={!!errors.name}
                errorMessage={!!errors.name ? errors.name : ""}
            />
            <Input
                value={values.email}
                onChange={handleChange}
                id="email"
                name="email"
                label="Email"
                placeholder="hola@correo.com"
                error={!!errors.email}
                errorMessage={!!errors.email ? errors.email : ""}
            />
            <TextArea
                value={values.message}
                onChange={handleChange}
                id="message"
                name="message"
                label="Mensaje"
                placeholder="mensaje"
                error={!!errors.message}
                errorMessage={!!errors.message ? errors.message : ""}
            />
            <div className="flex mt-4">
                <button
                    className="rounded-md bg-gold py-3 px-5 text-white outline-none shadow-md hover:shadow-lg"
                    type="submit"
                    disabled={loading}
                >
                    {loading !== true ? (
                        "Enviar"
                    ) : (
                        <div className="flex h-full w-full items-center justify-center ">
                            <RiLoader5Fill className="h-8 w-8 animate-spin" />
                        </div>
                    )}
                </button>
                <div className="flex flex-col justify-center ml-6">
                    <p>O contáctanos por WhatsApp</p>
                </div>
                <p className="mt-5 text-green-500">
                    {success !== false ? (
                        messageState
                    ) : (
                        <span className="text-red-500">{messageState}</span>
                    )}
                </p>
            </div>
        </form>
    );
};