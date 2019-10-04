module.exports =(app) =>{

   app.get('/' , (req,res) => {
      res.json({'data': 'i am here'})


   });

}