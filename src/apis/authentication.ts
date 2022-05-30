import { baseUrl } from './base'
import { useQuery } from 'react-query'

type paramsLoginTypes = {
    email: string;
    password: string;
}

export function useLogin(paramsLogin: paramsLoginTypes) {
    return async () => {
        const res = await fetch(`${baseUrl}/log-in`, {
            method: "POST",
            body: JSON.stringify(paramsLogin),
            headers: {
                "Content-Type": "application/json",
            },
        })
        
        return res.json()
    }
}

type paramsSignUpTypes = {
    username: string;
    email: string;
    password: string;
}

export function useSignUp(paramsSignUp: paramsSignUpTypes) {
    return async () => {
        const res = await fetch(`${baseUrl}/users`, {
            method: "POST",
            body: JSON.stringify(paramsSignUp),
            headers: {
                "Content-Type": "application/json",
            },
        })
        
        return res.json()
    }
}