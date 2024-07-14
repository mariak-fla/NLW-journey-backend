import fastify from 'fastify'
import cors from '@fastify/cors'
import { createTrip } from '../src/routes/create-trip'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { confirmTrip } from '../src/routes/confirm-trip'
import { confirmParticipants } from '../src/routes/confirm-participant'
import { createActivity } from '../src/routes/create-activity'
import { getActivities } from '../src/routes/get-activities'
import { createLink } from '../src/routes/create-link'
import { getLinks } from '../src/routes/get-links'
import { getParticipants } from '../src/routes/get-participants'
import { createInvite } from '../src/routes/create-invite'
import { updateTrip } from '../src/routes/update-trip'
import { getTripDetails } from '../src/routes/get-trip-details'
import { getParticipant } from '../src/routes/get-participant'
import { errorHandler } from '../src/error-handler'
import { env } from '../src/env'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)

app.listen({ port: env.PORT }).then(() => {
  console.log('Server running!')
})
