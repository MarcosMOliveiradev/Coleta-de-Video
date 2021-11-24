const ID = require("./id")

module.exports = {
  async create(req, res){
    const pass = req.body.password
    let roomId
      // gera o numero da sala
      for(var i = 0; i < 6; i++){
        i == 0 ?  roomId = Math.floor(Math.random() * 10).toString() :
        roomId += Math.floor(Math.random() * 10).toString()
      }
      ///////////////////////// FAZER CODIGO VERIFICAR NO BANCO DE DADOS ////////////////////////

    const id = ID.create({
      roomId,
      pass,
    });
    res.redirect(`/room/${roomId}`)
  // }
 },

 open(req, res){
  const roomId = req.params.room
  res.render("room", {roomId: roomId})
 },

 enter(req, res){
   const roomId = req.body.roomId

   res.redirect(`/room/${roomId}`)
 }
}
