/**
 * 
 * Puerto
 * 
 * 
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * 
 * Vencimiento del token
 * 60 s
 * 60 m
 * 24 h
 * 30 d
 */
process.env.CADUCIDAD_TOKE = 60 * 60 * 24 * 30;

/**
 * 
 * Seed de autenticación
 * 
 * 
 */
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION || 'este-es-el-seed-desarrollo';


/**
 * 
 * Entorno
 * 
 * 
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
/**
 * 
 * Base de datos
 * 
 * 
 */

let urlDb;
if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
    urlDb = process.env.MONGO_URI;
}

process.env.URLDB = urlDb;

/**
 * Google client_id
 * 
 */
process.env.CLIENT_ID = process.env.CLIENT_ID || "159560010594-r1jggnpk50jfn0ie4k72ojipl9tsqtm9.apps.googleusercontent.com";


//localhost:27017/prueba