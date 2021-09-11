const express = require("express");
const app = express();

app.get("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    console.log(`${n1} + ${n2} = ${n1+n2}`);
    response.send(`${n1} + ${n2} = ${n1+n2}`);
});

app.post("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    console.log(`${n1} * ${n2} = ${n1*n2}`);
    response.send(`${n1} * ${n2} = ${n1*n2}`);
});

app.put("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    console.log(`${n1} / ${n2} = ${n1/n2}`);
    response.send(`${n1} / ${n2} = ${n1/n2}`);
});

app.patch("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    console.log(`${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
    response.send(`${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
});

app.delete("/results/:n1/:n2", (request, response)=>{
    let n1 = Number(request.params.n1);
    let n2 = Number(request.params.n2);
    console.log(`${n1} - ${n2} = ${n1-n2}`);
    response.send(`${n1} - ${n2} = ${n1-n2}`);
});

app.listen(4000, ()=>{
    console.log("App up and running");
});