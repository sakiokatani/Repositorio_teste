const express = require('express');
const connectSequelize = require('../../database');
        connectSequelize.sync({alter:true});
const User = require('../../models/user_database')




async function handleUserUpdate(req, res){
try {
    console.log("entrei no try")
    const filterUserInDataBase = await User.findByPk(req.params.id);
    console.log(filterUserInDataBase);

    if(!filterUserInDataBase){
        res.status(404). json({message: 'User not found'});
    }else{

        if( req.body.email){
            console.log(filterUserInDataBase.email);
            console.log(req.body.email);
            if(filterUserInDataBase.email.values !== req.body.email){
                filterUserInDataBase.email = req.body.email;
                await filterUserInDataBase.save()
                return res.status(200).json({message: `email updated successufully to ${filterUserInDataBase.email}`});
            
            }else if(filterUserInDataBase.email === req.body.email){
                res.status(409).json({message: "Email is already up to date"});
            };
        }
    
        if( req.body.password){
            if(filterUserInDataBase.password === req.body.password){
                return res.status(401).json({message: "Old password. Please enter a new password."})
            }else{
                filterUserInDataBase.password= req.body.password;
                await filterUserInDataBase.save()
                return res.status(200).json({message: 'password has been succesfully updated'});
            }
        }
    
    }
} catch (error) {
    res.status(500).json({message: 'Internal Server error.'})
}
}

module.exports = {handleUserUpdate}

    // if(User.password === req.body.password){
    //     res.status(401).json({message: "Old password. Please enter a new password."})
    // }else{
    //     filterUserInDataBase.password= req.body.password;
    //     res.status(200).json({message: 'pssword has been succesfully updated'});
    // }
    
//     const filterUsernames = await User.filterAll({
//         where:{
//             username: req.body.username
//         }
//     });
//     if(filterUsernames === null){
//         filterUserInDataBase.username= req.body.username;
//         res.status(200).json({message:`Username updated to: ${filterUserInDataBase.username}`});
//     }else{
//         res.status(409).json({message: "This username is already in use. Please choose a new username and try again"});
//     }
// }
    
        
    //LEMBRETE: Terminar validações aqui para o put e criar a rota no user_routes
    
