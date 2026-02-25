import { gql } from '@apollo/client'

export const GET_HOMEPAGE = gql`
  query GetHomepage {
    page(id: "home", idType: URI) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`

export const GET_MENU = gql`
  query GetMenu($location: MenuLocationEnum!) {
    menuItems(where: { location: $location }) {
      nodes {
        id
        label
        url
        path
        parentId
        target
      }
    }
  }
`

export const GET_MENU_BY_ID = gql`
  query GetMenuById($id: ID!) {
    menu(id: $id, idType: DATABASE_ID) {
      id
      menuItems(first: 200) {
        nodes {
          id
          label
          url
          path
          parentId
          target
        }
      }
    }
  }
`

export const GET_PAGE = gql`
  query GetPage($id: ID!, $idType: PageIdType = URI) {
    page(id: $id, idType: $idType) {
      id
      title
      content
      slug
      uri
      date
      modified
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphImage {
          sourceUrl
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`

export const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages(first: 200, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        uri
        dateGmt
        modifiedGmt
      }
    }
  }
`

export const GET_CONTENT_BY_SLUG = gql`
  query GetContentBySlug($slug: String!) {
    pages(where: { name: $slug }) {
      nodes {
        id
        title
        content
        slug
        uri
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
    posts(where: { name: $slug }) {
      nodes {
        id
        title
        content
        slug
        uri
        date
        modified
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        uri
        date
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export const GET_POST = gql`
  query GetPost($id: ID!, $idType: PostIdType = SLUG) {
    post(id: $id, idType: $idType) {
      id
      title
      content
      slug
      date
      modified
      excerpt
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`

export const GET_GENERAL_SETTINGS = gql`
  query GetGeneralSettings {
    generalSettings {
      title
      description
      email
      url
    }
  }
`
