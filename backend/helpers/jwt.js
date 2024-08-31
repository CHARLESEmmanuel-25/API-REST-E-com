import { expressjwt } from "express-jwt";
import 'dotenv/config';

function authJwt(){
    const secret = process.env.secret;
    return expressjwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        // Les routes autorisées sans forcément être inscrit dans la bdd
        path: [
            { url: /^\/api\/v1\/products\/get\/featured\/(\d+)$/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/categories/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1/, methods: ['GET', 'OPTIONS'] },
            '/api/v1/users/login',
            '/api/v1/users/register',

            
        ]
    });
}

async function isRevoked(req, payload, done){
    if(!payload.isAdmin){
        done(null, true)
    }

    done(); 
}

export default authJwt;