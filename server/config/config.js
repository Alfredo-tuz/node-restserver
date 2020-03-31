/**
 * 
 * Puerto
 * 
 * 
 */
process.env.PORT = process.env.PORT || 3000;

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
    urlDb = 'mongodb://localhost:27017/medsi_sativa';
} else {
    urlDb = 'mongodb+srv://admin:qwerty123@cluster0-aw5st.mongodb.net/prueba';
}

process.env.URLDB = urlDb;

//localhost:27017/prueba