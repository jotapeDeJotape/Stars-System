import { compare, compareSync } from "bcryptjs"
import AppDataSource from "../../data-source"
import { Clients } from "../../entities/clients.entities";
import { AppError } from "../../errors/AppError"
import jwt from 'jsonwebtoken'

const createSessionService = async({email, password}) => {

    const clientRepository = AppDataSource.getRepository(Clients)

    const clientEmail = await clientRepository.findOneBy({
        email: email
    })

    const passwordMatch = await compare(password, clientEmail.password)

    if(!clientEmail || !passwordMatch ){
        throw new AppError("Your Email Or Password Are Invalid", 403)
    }

    if(!clientEmail.isActive){
        throw new AppError("Client Is Not Active", 400)
    }

    const token = jwt.sign({}, process.env.SECRET_KEY, {
        subject: clientEmail.id,
        expiresIn: '24h'
    })

    return token
}


export {createSessionService}