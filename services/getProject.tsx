import { gql, request } from "graphql-request"

const key = process.env.NEXT_PUBLIC_HYGRAPH_KEY
const HYGRAPH = `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${key}/master`

export const getProjects = async () => {
    const query = gql`
    query ProjectLists {
    projectLists {
    createdAt
    description
    id
    linkDemo
    linkGitHub
    name
    publishedAt
    slug
    tech
    updatedAt
    banner {
      url
    }
  }
}
`
    const response = await request(HYGRAPH, query)
    return response
}