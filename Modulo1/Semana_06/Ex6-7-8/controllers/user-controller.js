const getUserById = (req, res) => {
    console.log(req.params.id);
    res.send('Funcionou')
}

module.exports = 
{
    getUserById
}
