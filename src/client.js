import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'y9f3rhl3',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-04-10', // use current date (YYYY-MM-DD) to target the latest API version
})

export default client