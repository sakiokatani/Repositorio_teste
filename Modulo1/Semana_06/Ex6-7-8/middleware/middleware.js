

const checkLeader =  (req, res)=>{
    const userOccupation = req.body.user.occupation.toLowerCase();
    console.log(userOccupation);
    if (userOccupation !== 'líder'&& userOccupation !=='lider') {
        res.status(400).send({ message: "Usuário não é líder. Acesso negado." });
        return;
    }
    res.status(200).send({message:'Usuário é líder. Liberado acesso'})
    next();
}

module.exports ={
    checkLeader
}