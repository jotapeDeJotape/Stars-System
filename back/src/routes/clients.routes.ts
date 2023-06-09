import { Router } from "express";
import { createClientsControllers, deleteClientsControllers, listClientsControllers, patchClientsControllers, retriveClientsControllers } from "../controllers/clients.controller";
import { listContactsByClientControllers } from "../controllers/contacts.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwner } from "../middlewares/ensureIsOwner.middlewares";

const clientsRoutes = Router()

clientsRoutes.post('', createClientsControllers)
clientsRoutes.patch('/:id', ensureAuthMiddleware, ensureIsOwner, patchClientsControllers)
clientsRoutes.delete('/:id',ensureAuthMiddleware, ensureIsOwner ,deleteClientsControllers)
clientsRoutes.get('', listClientsControllers)
clientsRoutes.get('/:id', retriveClientsControllers)
clientsRoutes.get('/:id/contacts', listContactsByClientControllers)


export default clientsRoutes