import api from "@buscacep/axios";

interface Cep {
    cep: string
}

export default async function findCepService(cep: Cep) {

    return await api({
        method: "get",
        url: `https://viacep.com.br/ws/${cep}/json/`,
        responseType: "json"
    }).then((data) => {
        return data;       
    }).catch(error => {
        console.log(error);
        return error;
    });

}