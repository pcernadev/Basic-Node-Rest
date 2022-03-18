const {response, request} = require('express');

 const userGet= (req= request, res= response)=> {

       const {q,name, key} = req.query;



    res.json({
           ok: true,
           msg: 'get API - controller',
           q,
           name,
           key 
    });
  }

  const userPut = (req, res=response)=> {

    const {id}= req.params;

    res.json({
           ok: true,
           msg: 'put API - controller',
           id 
    });
  }


  const userPost = (req, res=response)=> {

    const body = req.body;

    res.json({
           ok: true,
           msg: 'post API - controller',
           body 
    });
   }

   const userDelete =(req, res=response)=> {
    res.json({
           ok: true,
           msg: 'delete API - controller' 
    });
  }


  const userPatch =(req, res=response)=> {
    res.json({
           ok: true,
           msg: 'Patch API - controller' 
    });
  }
 
  module.exports ={
      userGet,
      userPut,
      userPost,
      userDelete,
      userPatch
  } 
  
