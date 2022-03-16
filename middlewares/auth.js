
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

// module.exports = (req, res, next) => {
//     console.log(req.headers);
//     // Comprueba que existe el token.
//     if(!req.headers.authorization){
//         res.status(401).json({msg:"Acceso no autorizado"});
//     }else{
//     // Comprueba la validez de el token.
//         let token = req.headers.authorization.split(" ")[1];
//         jwt.verify(token, authConfig.secret, (err,decoded) => {
//             if(err){
//                 res.status(500).json({msg:"Ha ocurrido un problema al decodificar el token", err});
//             }else{
//                 req.user = decoded;
//                 next();
//             }
//         })
//     }
// }
module.exports = (req, res, next) => {
    console.log(req.headers);
    // elige la ficha
    let token = req.headers.authorization.split(' ')[1];
    // elegir el usuario registrado
    let {user} = jwt.decode(token, authConfig.secret)
    try {
        if (user.rol) { // Nombre de tu boolean que hace check en el permiso del usuario, el de david era 'rol' o algo asi
            next();
        } else {
            res.status(401).send({ msg: `Acceso no autorizado` });
        }
    } catch (error) {
        res.status(403).json({
            msg: `Algo malo a sucedido, intente verificar la informacion que puso y vuelva a intentarlo.`,error: error
        });
    }
};