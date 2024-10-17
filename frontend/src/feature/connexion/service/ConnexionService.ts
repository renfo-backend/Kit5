import User from "@/entity/User";
import {env} from "@/env";
import { generateBasicAuthHeader } from "@/repository";
export const connexionService = async (user: User) => {
    try {
        console.log(generateBasicAuthHeader(user));
        
        
        const response = await fetch("http://localhost:8080" + '/connect', {
            method: 'POST',
            headers:
                generateBasicAuthHeader(user),
        });

        console.log(response);
        
    } catch (error) {
        throw new Error("Erreur de connexion: " + error);
    }
};
