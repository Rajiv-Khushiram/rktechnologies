import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TransitionExampleDuration from '../Readings/TransitionExampleDuration'
import styled from "styled-components";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Navigation from '../Navigation';


import './index.css';


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const Section = styled.div`
  margin: 40px 60px 0px 60px;
`;
const Nav = styled.div``;
const ActivityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 80px;
`;
const Activity = styled.div`
  p {
    position: absolute;
    font-size: 26px;
  }
  svg {
    transition: transform 2s;
    position: absolute;
  }
  svg:hover {
    transform: scale(1.5);
  }
`;

const Main = styled.div`
  margin-top: 240px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MainText = styled.div`
  /* text-align: center; */
  h1 {
    text-align: center;
    font-size: 46px;
  }
`;
const MainImage = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Date = styled.div``;
const Add = styled.div``;
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Section>
      <Nav>
        <svg
          width="113"
          height="19"
          viewBox="0 0 113 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.368 1.176C15.768 1.176 16.112 1.32 16.4 1.608C16.704 1.88 16.856 2.224 16.856 2.64V16.536C16.856 16.952 16.72 17.304 16.448 17.592C16.176 17.864 15.816 18 15.368 18C14.92 18 14.552 17.864 14.264 17.592C13.992 17.32 13.856 16.968 13.856 16.536V6.864L9.896 12.912C9.736 13.104 9.552 13.264 9.344 13.392C9.136 13.504 8.92 13.552 8.696 13.536C8.488 13.552 8.28 13.504 8.072 13.392C7.864 13.264 7.68 13.104 7.52 12.912L3.56 6.648V16.536C3.56 16.968 3.432 17.32 3.176 17.592C2.92 17.864 2.584 18 2.168 18C1.768 18 1.44 17.864 1.184 17.592C0.928 17.304 0.8 16.952 0.8 16.536V2.64C0.8 2.24 0.944 1.896 1.232 1.608C1.536 1.32 1.896 1.176 2.312 1.176C2.552 1.176 2.792 1.24 3.032 1.368C3.272 1.48 3.456 1.632 3.584 1.824L8.816 9.864L14.192 1.824C14.32 1.632 14.488 1.48 14.696 1.368C14.92 1.24 15.144 1.176 15.368 1.176ZM29.7521 5.16C30.1681 5.16 30.5121 5.304 30.7841 5.592C31.0561 5.864 31.1921 6.208 31.1921 6.624V12.72C31.1921 14.448 30.7121 15.8 29.7521 16.776C28.8081 17.752 27.4561 18.24 25.6961 18.24C23.9361 18.24 22.5841 17.752 21.6401 16.776C20.6961 15.8 20.2241 14.448 20.2241 12.72V6.624C20.2241 6.208 20.3601 5.864 20.6321 5.592C20.9041 5.304 21.2481 5.16 21.6641 5.16C22.0801 5.16 22.4241 5.304 22.6961 5.592C22.9681 5.864 23.1041 6.208 23.1041 6.624V12.72C23.1041 13.696 23.3201 14.424 23.7521 14.904C24.1841 15.368 24.8321 15.6 25.6961 15.6C26.5761 15.6 27.2321 15.368 27.6641 14.904C28.0961 14.424 28.3121 13.696 28.3121 12.72V6.624C28.3121 6.208 28.4481 5.864 28.7201 5.592C28.9921 5.304 29.3361 5.16 29.7521 5.16ZM33.566 16.008C33.422 15.816 33.35 15.576 33.35 15.288C33.35 14.872 33.558 14.52 33.974 14.232C34.198 14.088 34.43 14.016 34.67 14.016C35.006 14.016 35.326 14.168 35.63 14.472C36.11 14.968 36.606 15.336 37.118 15.576C37.646 15.816 38.278 15.936 39.014 15.936C40.262 15.888 40.886 15.416 40.886 14.52C40.886 14.056 40.67 13.704 40.238 13.464C39.822 13.224 39.166 12.984 38.27 12.744C37.342 12.488 36.582 12.232 35.99 11.976C35.414 11.72 34.91 11.336 34.478 10.824C34.062 10.296 33.854 9.592 33.854 8.712C33.854 7.944 34.07 7.28 34.502 6.72C34.95 6.144 35.526 5.704 36.23 5.4C36.95 5.08 37.71 4.92 38.51 4.92C39.326 4.92 40.142 5.072 40.958 5.376C41.774 5.68 42.414 6.128 42.878 6.72C43.086 6.976 43.19 7.264 43.19 7.584C43.19 7.952 43.038 8.256 42.734 8.496C42.51 8.672 42.254 8.76 41.966 8.76C41.614 8.76 41.326 8.648 41.102 8.424C40.814 8.072 40.438 7.792 39.974 7.584C39.526 7.376 39.014 7.272 38.438 7.272C37.222 7.272 36.614 7.712 36.614 8.592C36.614 8.944 36.726 9.232 36.95 9.456C37.174 9.664 37.454 9.832 37.79 9.96C38.142 10.072 38.63 10.216 39.254 10.392C40.118 10.632 40.838 10.88 41.414 11.136C41.99 11.392 42.478 11.784 42.878 12.312C43.278 12.84 43.478 13.536 43.478 14.4C43.478 15.184 43.246 15.872 42.782 16.464C42.318 17.04 41.718 17.48 40.982 17.784C40.262 18.088 39.518 18.24 38.75 18.24C37.694 18.24 36.71 18.064 35.798 17.712C34.886 17.36 34.142 16.792 33.566 16.008ZM48.6001 16.536C48.6001 16.952 48.4641 17.304 48.1921 17.592C47.9201 17.864 47.5761 18 47.1601 18C46.7441 18 46.4001 17.864 46.1281 17.592C45.8561 17.304 45.7201 16.952 45.7201 16.536V6.624C45.7201 6.208 45.8561 5.864 46.1281 5.592C46.4001 5.304 46.7441 5.16 47.1601 5.16C47.5761 5.16 47.9201 5.304 48.1921 5.592C48.4641 5.864 48.6001 6.208 48.6001 6.624V16.536ZM47.1361 3.6C46.5921 3.6 46.2081 3.512 45.9841 3.336C45.7601 3.16 45.6481 2.848 45.6481 2.4V1.944C45.6481 1.496 45.7681 1.184 46.0081 1.008C46.2481 0.831999 46.6321 0.743999 47.1601 0.743999C47.7201 0.743999 48.1121 0.831999 48.3361 1.008C48.5601 1.184 48.6721 1.496 48.6721 1.944V2.4C48.6721 2.864 48.5521 3.184 48.3121 3.36C48.0881 3.52 47.6961 3.6 47.1361 3.6ZM57.152 4.92C58.512 4.92 59.608 5.136 60.44 5.568C61.272 5.984 61.688 6.544 61.688 7.248C61.688 7.6 61.584 7.912 61.376 8.184C61.168 8.44 60.896 8.568 60.56 8.568C60.304 8.568 60.096 8.536 59.936 8.472C59.776 8.392 59.616 8.296 59.456 8.184C59.312 8.056 59.168 7.952 59.024 7.872C58.864 7.792 58.624 7.72 58.304 7.656C58 7.592 57.752 7.56 57.56 7.56C56.36 7.56 55.416 7.936 54.728 8.688C54.056 9.424 53.72 10.392 53.72 11.592C53.72 12.744 54.064 13.704 54.752 14.472C55.44 15.224 56.32 15.6 57.392 15.6C58.176 15.6 58.76 15.504 59.144 15.312C59.24 15.264 59.368 15.184 59.528 15.072C59.704 14.944 59.864 14.848 60.008 14.784C60.152 14.72 60.328 14.688 60.536 14.688C60.936 14.688 61.248 14.816 61.472 15.072C61.712 15.328 61.832 15.656 61.832 16.056C61.832 16.44 61.608 16.8 61.16 17.136C60.712 17.472 60.12 17.744 59.384 17.952C58.648 18.144 57.864 18.24 57.032 18.24C55.8 18.24 54.712 17.952 53.768 17.376C52.84 16.8 52.12 16.008 51.608 15C51.096 13.976 50.84 12.84 50.84 11.592C50.84 10.296 51.104 9.144 51.632 8.136C52.176 7.128 52.928 6.344 53.888 5.784C54.848 5.208 55.936 4.92 57.152 4.92ZM70.7756 4.92C72.4076 4.92 73.5356 5.408 74.1596 6.384C74.7836 7.344 75.0956 8.68 75.0956 10.392V16.536C75.0956 16.952 74.9596 17.304 74.6876 17.592C74.4156 17.864 74.0716 18 73.6556 18C73.2396 18 72.8956 17.864 72.6236 17.592C72.3516 17.304 72.2156 16.952 72.2156 16.536V10.392C72.2156 9.512 72.0316 8.824 71.6636 8.328C71.2956 7.816 70.6636 7.56 69.7676 7.56C68.8396 7.56 68.1116 7.832 67.5836 8.376C67.0556 8.904 66.7916 9.576 66.7916 10.392V16.536C66.7916 16.952 66.6556 17.304 66.3836 17.592C66.1116 17.864 65.7676 18 65.3516 18C64.9356 18 64.5916 17.864 64.3196 17.592C64.0476 17.304 63.9116 16.952 63.9116 16.536V6.624C63.9116 6.208 64.0476 5.864 64.3196 5.592C64.5916 5.304 64.9356 5.16 65.3516 5.16C65.7676 5.16 66.1116 5.304 66.3836 5.592C66.6556 5.864 66.7916 6.208 66.7916 6.624V7.032C67.2236 6.456 67.7836 5.96 68.4716 5.544C69.1756 5.128 69.9436 4.92 70.7756 4.92ZM89.7284 11.28C89.7124 11.664 89.5604 11.976 89.2724 12.216C88.9844 12.456 88.6484 12.576 88.2644 12.576H80.3444C80.5364 13.52 80.9764 14.264 81.6644 14.808C82.3524 15.336 83.1284 15.6 83.9924 15.6C84.6484 15.6 85.1604 15.544 85.5284 15.432C85.8964 15.304 86.1844 15.176 86.3924 15.048C86.6164 14.904 86.7684 14.808 86.8484 14.76C87.1364 14.616 87.4084 14.544 87.6644 14.544C88.0004 14.544 88.2884 14.664 88.5284 14.904C88.7684 15.144 88.8884 15.424 88.8884 15.744C88.8884 16.176 88.6644 16.568 88.2164 16.92C87.7684 17.288 87.1684 17.6 86.4164 17.856C85.6644 18.112 84.9044 18.24 84.1364 18.24C82.7924 18.24 81.6164 17.96 80.6084 17.4C79.6164 16.84 78.8484 16.072 78.3044 15.096C77.7604 14.104 77.4884 12.992 77.4884 11.76C77.4884 10.384 77.7764 9.176 78.3524 8.136C78.9284 7.096 79.6884 6.304 80.6324 5.76C81.5764 5.2 82.5844 4.92 83.6564 4.92C84.7124 4.92 85.7044 5.208 86.6324 5.784C87.5764 6.36 88.3284 7.136 88.8884 8.112C89.4484 9.088 89.7284 10.144 89.7284 11.28ZM83.6564 7.56C81.8004 7.56 80.7044 8.432 80.3684 10.176H86.6564V10.008C86.5924 9.336 86.2644 8.76 85.6724 8.28C85.0804 7.8 84.4084 7.56 83.6564 7.56ZM101.586 15.72C101.794 15.976 101.898 16.264 101.898 16.584C101.898 16.984 101.746 17.328 101.442 17.616C101.138 17.904 100.802 18.048 100.434 18.048C99.9703 18.048 99.5783 17.84 99.2583 17.424L96.3783 13.848L93.5703 17.424C93.4263 17.616 93.2503 17.768 93.0423 17.88C92.8503 17.976 92.6423 18.024 92.4183 18.024C92.0823 18.024 91.7623 17.896 91.4583 17.64C91.1543 17.384 91.0023 17.088 91.0023 16.752C91.0023 16.432 91.1223 16.128 91.3623 15.84L94.6983 11.76L91.2423 7.464C91.0343 7.208 90.9303 6.92 90.9303 6.6C90.9303 6.2 91.0743 5.864 91.3623 5.592C91.6663 5.304 92.0103 5.16 92.3943 5.16C92.8583 5.16 93.2503 5.36 93.5703 5.76L96.5223 9.432L99.2583 5.808C99.5623 5.376 99.9463 5.16 100.41 5.16C100.794 5.16 101.114 5.296 101.37 5.568C101.642 5.824 101.778 6.12 101.778 6.456C101.778 6.808 101.666 7.12 101.442 7.392L98.1303 11.424L101.586 15.72ZM111.213 15.288C111.437 15.288 111.637 15.4 111.813 15.624C112.005 15.832 112.101 16.112 112.101 16.464C112.101 16.896 111.861 17.264 111.381 17.568C110.917 17.856 110.389 18 109.797 18C108.805 18 107.965 17.792 107.277 17.376C106.605 16.944 106.269 16.04 106.269 14.664V8.04H105.165C104.781 8.04 104.461 7.912 104.205 7.656C103.949 7.4 103.821 7.08 103.821 6.696C103.821 6.328 103.949 6.024 104.205 5.784C104.461 5.528 104.781 5.4 105.165 5.4H106.269V3.864C106.269 3.448 106.405 3.104 106.677 2.832C106.965 2.544 107.317 2.4 107.733 2.4C108.133 2.4 108.469 2.544 108.741 2.832C109.013 3.104 109.149 3.448 109.149 3.864V5.4H110.853C111.237 5.4 111.557 5.528 111.813 5.784C112.069 6.04 112.197 6.36 112.197 6.744C112.197 7.112 112.069 7.424 111.813 7.68C111.557 7.92 111.237 8.04 110.853 8.04H109.149V14.544C109.149 14.88 109.237 15.128 109.413 15.288C109.589 15.432 109.829 15.504 110.133 15.504C110.261 15.504 110.437 15.472 110.661 15.408C110.853 15.328 111.037 15.288 111.213 15.288Z"
            fill="black"
          />
        </svg>
      </Nav>
      <ActivityList>
        <Activity>
          <svg
            width="89"
            height="69"
            viewBox="0 0 89 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8857 64.4733C-12.9882 55.103 4.28788 25.3301 22.5238 5.00771C96.1028 -16.2222 89.7661 36.08 88.1303 49.5808L88.109 49.7571C86.5094 62.9717 47.4782 76.1863 13.8857 64.4733Z"
              fill="#7ED1FF"
            />
          </svg>

          <p>Music</p>
        </Activity>
        <Activity>
          <svg
            width="105"
            height="80"
            viewBox="0 0 105 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.382 74.7517C-15.3232 63.8875 5.05873 29.3683 26.573 5.80604C113.38 -18.8084 105.904 41.8318 103.974 57.485L103.949 57.6894C102.062 73.0106 56.0136 88.3319 16.382 74.7517Z"
              fill="#F5DC56"
            />
          </svg>

          <p>Cinema</p>
        </Activity>
        <Activity>
          <svg
            width="92"
            height="80"
            viewBox="0 0 92 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.137 67.4921C-11.5682 56.628 -1.37721 26.365 20.137 2.80276C92 -14.1221 92 50.4298 92 67.4921C92 84.5545 59.7685 81.0723 20.137 67.4921Z"
              fill="#FC9D5D"
            />
          </svg>

          <p>Theater</p>
        </Activity>
        <Activity>
          <svg
            width="83"
            height="69"
            viewBox="0 0 83 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9858 59.7123C-9.18341 50.9592 -1.0933 26.577 15.9858 7.59338C85.201 -12.3254 82 7.59337 82 59.7123C82 73.4591 47.4472 70.6536 15.9858 59.7123Z"
              fill="#F56457"
            />
          </svg>

          <p>Art</p>
        </Activity>
      </ActivityList>
    </Section>
    <Header
      as='h1'
      content='A Full Stack Developer'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Project Showcase'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    
    <Button onClick={handleClick} primary size='huge'>
      Click to Start
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = { visible: true}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
              
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >

            
              <Container>
              <Navigation/>
               {/*  <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>*/} 
              </Container>
            </Menu>
           <HomepageHeading /> 
          </Segment>
        </Visibility>

           {children} 
      </Responsive>
    )
  }
}


DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
      <Navigation/>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
               <Navigation/>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const FrontPage = () => (

  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Projects' />
              <List link inverted>
                <List.Item as='a'></List.Item>
                <List.Item as='a'>Python</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default FrontPage


