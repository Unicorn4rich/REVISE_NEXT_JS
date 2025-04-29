import { type SchemaTypeDefinition } from 'sanity'

export const names: SchemaTypeDefinition = {
  name: 'name',
  type: 'document',
  title: 'Name',
  fields: [
    { name: 'name', type: 'string', title: 'Name' }
  ]
}