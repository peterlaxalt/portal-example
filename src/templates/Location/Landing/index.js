// templates/Location/Landing/index.js:
// This is the Location Landing page.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LocationLandingTemplate from './layout';

// Transformers
import { locationLandingTransformer } from 'templates/Location/Transformer';

// Data
import { graphql } from 'gatsby';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationLandingPage = props => {
  console.log(locationLandingTransformer(props.data));
  return (
    <LocationLandingTemplate
      LocationData={props.data.allLocationsJson.edges[0].node}
      Location={props.location}
      Headline={props.data.allLocationsJson.edges[0].node.about.headline}
    />
  );
};

export default LocationLandingPage;

// GraphQL Queries
/////////////////////////////////////////////////////////////////////

// The post template's GraphQL query. Notice the slug
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const query = graphql`
  query($Slug: String!, $Id: String!) {
    allLocationsJson(filter: { slug: { eq: $Slug } }) {
      edges {
        node {
          id
          slug
          name
          geography {
            city
            state
            country
          }
          status {
            delivery
            store
          }
          meta {
            reserveSpot
            menu
            maps
          }
          contactDetails {
            phone
            location {
              address
              state
            }
            hours {
              days
              startTime
              endTime
            }
          }
          nearby {
            name
            slug
          }
          about {
            headline
            PageTheme {
              Color {
                Background
                Primary
                Secondary
                Tertiary
              }
            }
            summary {
              headline
              body
              gallery {
                Src
                Alt
              }
            }
          }
        }
      }
    }

    allPrismicLocation(filter: { id: { eq: $Id } }) {
      edges {
        node {
          id
          tags
          uid
          data {
            status_delivery
            status_store
            geo_city
            geo_state
            geo_country
            geo_location_address
            geo_location_state
            phone
            hours {
              days
              start_time
              end_time
            }
            meta_reserve_spot_link {
              url
            }
            meta_menu {
              url
            }
            meta_google_maps_url {
              url
            }
            nearby_locations {
              nearby_name
              nearby_slug
              color_background
              color_primary
              color_secondary
              color_tertiary
            }
            about_headline {
              text
            }
            color_background
            color_primary
            color_secondary
            color_tertiary
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
