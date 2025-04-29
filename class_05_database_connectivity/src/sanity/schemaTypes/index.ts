import { type SchemaTypeDefinition } from 'sanity'
import { loginSchema } from './loginSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [loginSchema],
}
