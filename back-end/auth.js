const bcrypt = require('bcryptjs');   //encriptografador
const LocalStrategy = require('passport-local').Strategy;   //Campos do login para autenticação
 
module.exports = function (passport) {
 
    passport.serializeUser((user, done) => {      //PASSPORT SALVA COOK NO FRONTEND (NAVEGADOR DO USUÁRIO) E SESSÃO NO BACKEND
        done(null, user.id);      //"null" é a informação de erro e "user._id" é a informação que será salva (campo único), email
    });
 
    passport.deserializeUser(async (id, done) => {       //LÊ O COOK E TRANSFORMA NO OBJETO NOVAMENTE, QUE VEIO NA REQUEST
        try {
            const db = require('./db');
            const user = await db.findUserById(id);      //"SELECT"
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
 
    passport.use(new LocalStrategy({
        usernameField: 'username',     //'username' do form
        passwordField: 'password'       //'password' do form
    },
        async (username, password, done) => {
            try {
                const db = require('./db');
                const user = await db.findUser(username);      //"SELECT"
 
                // usuário inexistente
                if (!user) { return done(null, false) }
 
                // comparando as senhas
                const isValid = bcrypt.compareSync(password, user.password);
                if (!isValid) return done(null, false)
                
                return done(null, user)
            } catch (err) {
                done(err, false);
            }
        }
    ));
}