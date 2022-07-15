import { Application, Request, Response } from "express";
import { BuscaCepController } from "../controllers/index";

class Routes {
    private buscarCepController: BuscaCepController = new BuscaCepController();
    
    public routers(app: Application) {
        app.get('/', (__: Request, res: Response) => {
            res.status(200).send("Application Eureka running!")
        });

        app.post('/buscarcep', this.buscarCepController.findCep);
    }
}

export default Routes;