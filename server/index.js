console.clear();
import express from 'express';

const PORT = 3000;
const app = express();

app.listen(PORT, () =>
    console.log(`Servidor levantado en puerto ${PORT}`)
);

