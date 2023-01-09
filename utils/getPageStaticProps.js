import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getPageStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: process.env.WP_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });

  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            uri
            blocksJSON
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            callToAction {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToAction.label,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToAction.destination.uri,
      blocks,
    },
  };
};
