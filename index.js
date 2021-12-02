//const express= require('express')
import express from "express";
const router = express.Router();
import fetch from "node-fetch";


fetch("https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/2019-12-01?dias=5")
.then((respuesta)=>{
    return respuesta.json()
}).then((resp)=>{
    console.log(resp);
})


fetch("https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/2019-12-01")
.then((respuesta)=>{
    return respuesta.json()
}).then((resp)=>{
    console.log(resp);
})