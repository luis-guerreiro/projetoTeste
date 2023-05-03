import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Usuario } from "../../models/Usuario";
import { Button, Form, FormContainer, GroupFields, Input, Label, LoginContainer, SectionTitle } from "./styles";

export function Login() {
    const { login, token } = useContext(AuthContext)

    const [dataUser, setDataUser] = useState<Usuario>({} as Usuario)

    let navigate = useNavigate()

    useEffect(() => {
        if (token !== "") {
            navigate('/home')
        }
    }, [token])

    async function handleLogin(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        await login(dataUser)
    }

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <LoginContainer>
            <FormContainer>
                <SectionTitle>
                    <h1>Entrar</h1>
                    <h3>Bem-vindo(a) de volta.</h3>
                </SectionTitle>

                <Form onSubmit={handleLogin}>
                    <GroupFields>
                        <Label htmlFor="usuario">Email</Label>
                        <Input
                            id="usuario"
                            type="email"
                            name="usuario"
                            placeholder="Insira seu email"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                            required />
                    </GroupFields>

                    <GroupFields>
                        <Label htmlFor="senha">Senha</Label>
                        <Input
                            id="senha"
                            type="password"
                            name="senha"
                            placeholder="Insira sua senha"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                            required />
                    </GroupFields>

                    <Button type="submit">Entrar</Button>
                </Form>

            </FormContainer>
        </LoginContainer>
    )
}
