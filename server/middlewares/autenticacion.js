const jwt = require('jsonwebtoken');
/**
 * Verificar token
 */

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED_AUTENTICACION, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido"
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });


};


/**
 * Verifica adminRole
 */
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role == "ADMIN_ROLE") {
        next();
        return;
    } else {
        return res.json({
            ok: false,
            err: {
                message: "Token no válido"
            }
        });
    }


};


module.exports = {
    verificaToken,
    verificaAdminRole
}