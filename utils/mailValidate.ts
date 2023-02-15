export const validate = ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name || name.trim() === "") {
        errors.name = "Requerido";
    }
    if (!email || email.trim() === "") {
        errors.email = "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Email invalido";
    }
    if (!message || message.trim() === "") {
        errors.message = "Requerido";
    }
    return errors;
};