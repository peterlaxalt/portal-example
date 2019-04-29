// Navigation Component:
// This is the sitewide Navigation of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// Vendor
// import Img from 'gatsby-image';

// Styles
import NavigationStyle from './styles.scss';

// Components
import Btn from 'components/library/Btn/';
import LinkList from 'components/core/LinkList/';

// Constants
import { Theme } from 'constants/Theme';
import logo from '../../../../assets/images/brandmark.png';

// Begin Component
//////////////////////////////////////////////////////////////////////

// The Large Device Navigation
class NavigationLarge extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    const Location = this.props.Location;
    const Routes = this.props.Routes;

    return (
      <NavigationStyle>
        <NavigationStyle.Top className="nav-top scroll">
          <NavigationStyle.Top.BrandingBlock>
            <Link to="/">
              <img src={logo} alt={Theme.Site.Title} height="30px" />
            </Link>
          </NavigationStyle.Top.BrandingBlock>

          <NavigationStyle.Top.LinkListBlock>
            <NavigationStyle.Top.TopLinkListWrapper
              location={Location}
              routes={Routes}
            >
              <LinkList ActiveclassName="active" />
            </NavigationStyle.Top.TopLinkListWrapper>
          </NavigationStyle.Top.LinkListBlock>

          <NavigationStyle.Top.CommunicationBlock>
            <Btn
              Label="View Menu"
              Destination="/menu"
              BgColor={Theme.Color.Primary}
              TextColor={Theme.Color.White}
            />
          </NavigationStyle.Top.CommunicationBlock>
        </NavigationStyle.Top>

        <NavigationStyle.Bottom
          location={Location}
          routes={Routes}
          className="nav-bottom"
        >
          <NavigationStyle.Bottom.LinkListWrapper
            location={Location}
            routes={Routes}
          >
            <LinkList ActiveclassName="active" />
          </NavigationStyle.Bottom.LinkListWrapper>
        </NavigationStyle.Bottom>
      </NavigationStyle>
    );
  }
}

export default NavigationLarge;

//////////////////////////////////////////////////////////////////////
// End Component
