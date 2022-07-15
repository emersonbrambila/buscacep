"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routers = function (app) {
        app.get('/', function (__, res) {
            res.status(200).send("Application Eureka running!");
        });
    };
    return Routes;
}());
exports.default = Routes;
