if(process.env.NODE_DEV ==='production'){
   module.exports = { mongoURI: }
}else{
   module.exports ={mongoURI :mongodb://localhost/rateme-app2}
}