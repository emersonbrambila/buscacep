import express, { Application } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import Routes from "../routes";

const allowedOrigins = ['http://localhost:4000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
}

class App {
    public app: Application;
    private routers: Routes = new Routes();

    private config(): void {
        this.app.use(cors(options));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

    constructor() {
        this.app = express();
        this.config();
        this.routers.routers(this.app);
    }
}

export default new App().app;