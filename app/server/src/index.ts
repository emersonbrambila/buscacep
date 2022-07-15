import app from "./config/app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () :void => {
    console.log(`Eureka Buscacep - Server running at http://localhost:${PORT}`);
});