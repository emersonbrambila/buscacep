import React, { useState } from "react";
import InputMask from "react-input-mask";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import api from "@buscacep/axios";

const App: React.FC = () => {

    const [value, setValue] = useState({
        value: ""
    });

    const [cep, setCep] = useState(null);

    async function handleSubmit() {
        const data = {
            cep: value.value
        };

        await api.post("http://localhost:3000/buscarcep", data).then(res => {

            setCep({
                ...res.data
            });

        }).catch(__ => {
            alert("Message: Cep inserido não encontrado!")
        });

    }

    return (
        <div className="App">
            <div className="Box">
                <div className="Logo">
                    <h3>Eureka Labs - BuscaCep</h3>
                </div>
                <div className="Form">
                    <form method="POST" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        <InputMask
                            mask="99999-999"
                            value={value.value}
                            disabled={false}
                            maskChar=""
                            onChange={(data) => {
                                setValue({
                                    value: data.target.value
                                });
                            }}
                        >
                            {() => <TextField
                                required
                                id="standard-required"
                                label="Insira o Cep"
                                variant="standard"
                            />}
                        </InputMask>

                        <Button type="submit" variant="contained">Buscar</Button>
                    </form>
                </div>
            </div>
            {
                cep !== null &&
                <div className="Endereco">
                    <h4>Resultados encontrados</h4>
                    <span>{cep.logradouro}</span>
                    <hr></hr>
                    <div className="Info">
                        <div className="Content">
                            <span><strong>Cep</strong>: {cep.cep}</span>
                            <span><strong>Bairro</strong>: {cep.bairro}</span>
                            <span><strong>Complemento</strong>: {cep.complemento}</span>
                        </div>
                        <div className="Content">
                            <span><strong>Localidade</strong>: {cep.localidade}</span>
                            <span><strong>UF</strong>: {cep.uf}</span>
                            <span><strong>Código DDD</strong>: {cep.ddd}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

};

export default App;