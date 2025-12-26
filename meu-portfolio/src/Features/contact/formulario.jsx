import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

import { useLanguage } from "../../shared/Hooks/useLanguage"
import "./style.css"
import Div from "./div-links"

export default function Form() {
    const { t } = useLanguage()
    const form = useRef()
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert(t.contact.form.success || "Mensagem enviada com sucesso!")
                    form.current.reset()
                    setLoading(false)
                },
                (error) => {
                    console.error(error)
                    alert(t.contact.form.error || "Erro ao enviar. Tente novamente.")
                    setLoading(false)
                }
            )
    }

    return (
        <>
            <div className="div-formulario">
                <form
                    ref={form}
                    className="formulario-contato"
                    onSubmit={sendEmail}
                >
                    <input
                        className="input nome"
                        type="text"
                        name="name"
                        placeholder={t.contact.form.name}
                        required
                    />

                    <input
                        className="input email"
                        type="email"
                        name="email"
                        placeholder={t.contact.form.email}
                        required
                    />

                    <textarea
                        className="input mensagem"
                        name="message"
                        placeholder={t.contact.form.message}
                        required
                    />

                    <button
                        type="submit"
                        className="btn-enviar"
                        disabled={loading}
                    >
                        {loading ? "Enviando..." : t.contact.form.send}
                    </button>
                </form>
            </div>
        </>

    )
}
