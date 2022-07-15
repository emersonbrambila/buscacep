"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../controllers/index");
var Routes = /** @class */ (function () {
    function Routes() {
        this.buscarCepController = new index_1.BuscaCepController();
    }
    Routes.prototype.routers = function (app) {
        app.get('/', function (__, res) {
            res.status(200).send("Application Eureka running!");
        });
        app.post('/buscarcep', this.buscarCepController.findCep);
    };
    return Routes;
}());
exports.default = Routes;
