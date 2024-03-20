import express, { Application, Request, Response,NextFunction} from "express";
import cors from "cors";
import router from "./app/routes";
import httpStatus from "http-status";

const app: Application = express();

// PARSER
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Hello World!",
  });
});

app.use('/api/v1',router)

app.use((err,req:Request,res:Response,next:NextFunction)=>{
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success:false,
    message: err.message ||'something went wrong!',
    error:err
  })
})




export default app;
