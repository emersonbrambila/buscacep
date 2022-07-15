import { Request, Response } from "express";
import database from "../../database/connection";
import findCepService from "../viaCep";
import clearCep from "../utils/clearCep";

interface Cep {
    cep: string
}

class BuscaCepController {

    async findCep(req: Request, res: Response) {
        const { cep } = req.body;
        const treatCepRequest = clearCep(cep);        

        if (!cep) {
            return res.status(400).json({
                status: 400,
                message: "Please insert a correct zip code."
            });
        }

        // Find CEP in database
        const findCep = await database<Cep>("enderecos").where('cep', treatCepRequest).first();

        if (findCep === undefined) {
            const viaCepService = await findCepService(treatCepRequest);
            
            if (viaCepService?.status === 200 && !viaCepService?.data?.erro === undefined) {

                const treatCep = clearCep(viaCepService.data.cep);
                const treatData = {
                    ...viaCepService.data,
                    cep: treatCep,
                }

                await database("enderecos").insert(treatData).then(async (data) => {
                    
                    const insertedData = await database("enderecos").where("id", data[0]);

                    return res.status(200).json({
                        ...insertedData[0]
                    });

                }).catch(error => {
                    console.log(error);

                    return res.status(500).json({
                        status: 500,
                        message: "Internal Error"
                    });
                });
            } else {
                return res.status(400).json({
                   status: 400,
                   message: "Verify zip code"
                });
            }
        } else {
            return res.status(200).json({
                ...findCep
            });
        }
    }
}

export { BuscaCepController };