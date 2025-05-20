import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Token ko environment variable se lena hai.
})
