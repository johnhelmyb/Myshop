import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import Admin from './routes/Admin.js';
import productRoute from './routes/productRoute.js';
//import routes from './routes/userRouter.js';

//import middlewares from './middlewares/middlewares.js';
const app = express();
//const routes = express.Router
const db = require("./models");
db.sequelize.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', Admin);
app.use('/users1', userRouter) 
app.use('/productroute', productRoute) 




app.get('/', (req, res) => {
    //const sqlInsert = "INSERT INTO "
    res.send("hello");
})
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})
productRoute.get('/seed', expressAsyncHandler(async (req, res )=> {
    //await ProductPage.remove({});
    const createdProducts = await ProductPage.inserMany(data.products)
    res.send({ createdProducts });
})
);
productRoute.get('/:id', expressAsyncHandler(async(req, res) =>{
    const product = await ProductPage.findById(req.params.id);
    if (product) {
        res.send(product);
    }else {
        res.status(404).send({ message: 'Article non trouvé'});
    }
}))

app.listen(3001, () => {
    console.log('connected');
});

