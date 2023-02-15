import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
type Data = {
    message: string;
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;
        const msg = `Nombre: ${name}\r\n Email: ${email}\r\n Mensaje: ${message}`;
        const data = {
            to: "youremail@gmail.com",
            from: "yoursendgridemail@test.com",
            subject: `${name.toUpperCase()} te envio un mensaje a través del formulario de tu página web`,
            text: `Email => ${email}`,
            html: msg.replace(/\r\n/g, "<br>"),
        };
        try {
            await sgMail.send(data);
            res.status(200).json({ message: "Tu mensaje fue enviado exitosamente." });
        } catch (err) {
            res
                .status(500)
                .json({ message: `Hubo un error tecnico al enviar tu correo, por favor intenta comunicarte por otro medio. ${err}` });
        }
    }
}