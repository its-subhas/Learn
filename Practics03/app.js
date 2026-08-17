const express = require('express');
const Path = require('path');
const RootDir = require('./Util/Path');
const {userRouter} = require('./Routes/userRoutes');
const {hostRouter} = require('./Routes/hostRoutes');
const {notFound} = require('./Controllers/notFound');
const db = require('./Util/dbMySql');



db.execute('select * from homes;')
.then(([rows,feilds])=>{
  console.log("Fetch From nodedb: ", rows);
})
.catch(err=>{
  console.log("Error Occured: ", err);
})



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'Views');
app.use(express.urlencoded());
app.use(express.static(Path.join(RootDir, 'Public')));

app.use(userRouter);
app.use("/host",hostRouter);
app.use(notFound);



const port = 3000;

app.listen(port,()=>{
  console.log(`Server running: http://localhost:${port}`);
})