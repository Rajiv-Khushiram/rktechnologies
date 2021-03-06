import PropTypes from "prop-types";
import React, { Component, createRef } from "react";
import Delayed from './delayed';
import {  Button,
  Container,
  Divider,
  Label,
  Embed,
 Card,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Ref,
  Transition,
  Visibility } from "semantic-ui-react";
import { Link  } from 'react-scroll'
import './index.scss'
import ReactParticles from 'react-particles-js';
import particlesConfig from '../FrontPage6/particles-config';
import Typist from 'react-typist';
import Typed from "react-typed";
import reviewslogo from '../FrontPage6/wawarev.png'; 
import logo from '../FrontPage6/igrouplogo.jpg'
import fotorajiv from '../FrontPage6/avatarajiv.jpg'
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};


function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}
class TypistExample extends React.Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    const docs = '//github.com/jstejada/react-typist';
    return (
    <div style={{paddingBottom:"80px"}} className="TypistExample">
        
        <Typist
          className="TypistExample-header"
          avgTypingDelay={40}
          startDelay={1000}
          onTypingDone={this.onHeaderTyped}
        >
           <h1 style={{color:'white'}}>4 + years of web development experience</h1>
        </Typist>
        <div className="TypistExample-content">
          {this.state.renderMsg ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: false }}
            >
               <span style={{color:'white', fontSize:'30px'}}>A T Shaped Programmer</span>
              <Typist.Delay ms={500} />
              <Typist.Backspace count={11} delay={1000} />
              <span style={{color:'white', fontSize:'30px' }}> Developer</span><Typist.Delay ms={500} />
              
              {''}
            </Typist>
          ) : null }
        </div>
      </div>
    );
  }

}

class HomepageHeading extends Component {
  state = {
    mobile: this.props,
    hide: 500,
    show: 2500,
    visible: false
  };

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ visible: true });
      }.bind(this),
      500
    );
  }

  render() {
    const { mobile } = this.props;
    const { visible } = this.state;

    return (
     <Container  id="homela">
        <br></br>
         <Transition
          animation={"horizontal flip"}
          duration={1000}
          visible={visible}
        >
      <center> <img src={fotorajiv} className="ui small avatar bordered rounded image"></img></center>  
         </Transition>
        <Transition
          animation={"horizontal flip"}
          duration={1000}
          visible={visible}
        >
         <Particles>  <Header
            
            as="h1"
            content="Hi, I'm Raj."
            inverted
            style={{
              width:"100%",
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "0.5em"
            }}
          /></Particles>

         
        </Transition>
       


        {/* <Transition
          animation={"vertical flip"}
          duration={1000}
          visible={visible}
        >
          <Header
            as="h2"
            content="A T shaped Developer."
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em"
            }}
          />
         
        </Transition> */}
        <TypistExample/>
        <br></br>

        <center>
          <Transition animation={"fade"} duration={1000} visible={visible}>
          
            <div>
            {/* <Link
                activeclass="active"
                to="PROJECTS"
                spy={true}
                smooth={true}
                duration= {700}
            ><Button  color='brown' inverted animated='vertical'>
            <Button.Content visible><h3>Summary</h3> <Icon name='arrow alternate circle right' /></Button.Content>
            <Button.Content  hidden>Click To Start<Icon name='arrow down' /></Button.Content>
          </Button></Link> */}
            </div>
          </Transition>
         
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       

      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {
    calculations: {
      direction: "none",
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    }
  };

  contextRef = createRef();
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleUpdate = (e, { calculations }) => {
    this.setState({ calculations });
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { calculations } = this.state;

    return (
     
        
      <div  id="startinTransition" >
     <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
            offset={[10, 10]}
            onUpdate={this.handleUpdate}
            updateOn="repaint"
          >
            
            <Segment
              
              textAlign="center"
              style={{backgroundImage:"url(https://www.intechnic.com/hs-fs/hubfs/intechnic_2017/assets/images/landing/footer/map-xl.jpg?width=1680&height=824&name=map-xl.jpg)", height: '100vh', padding: "0.5em 0em" }}
              vertical
            >
              <Menu  style={{background:"transparent", padding:'20px 40px 0px 70px'}} fixed={fixed ? "top" : null} inverted={true} size="large">
                <Container style = {{width:'100%'}}>
                  <Transition
                    visible={calculations.topPassed}
                    animation="fade down"
                    duration={1000}
                  >
                     <Menu.Item>
            <Link
                activeclass="active"
                to="HOME"
                spy={true}
                smooth={true}
                duration= {700}
            ><i aria-hidden="true" className="rendact big icon"></i></Link>
              </Menu.Item>
                  </Transition>
                  <Transition
                    visible={calculations.topPassed}
                    animation="fade down"
                    duration={1500}
                  >
                    <Link
                activeclass="active"
                to="PROJECTS"
                spy={true}
                smooth={true}
                duration= {700}
            >
                     <Menu.Item href="#PROJECTS">
            Projects</Menu.Item></Link>
                  </Transition>
                  {/* <Transition
                    visible={calculations.topPassed}
                    animation="fade down"
                    duration={1500}
                  >
                   <Menu.Item as="a"></Menu.Item>
                  </Transition> */}
                  <Transition
                    visible={calculations.topPassed}
                    animation="scale"
                    duration={1500}
                  >
                    <Menu.Menu position='right'>  
              {/* <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item> */}
               <Menu.Item>
        <Label as='a' target="_blank" size='large' href='https://drive.google.com/open?id=1nNCsi9VEjvJ-JDMr0ZgwqAy5tVi3EaLE' color='brown' ><i className="file alternate outline icon"></i>
         Resume 
        </Label>
        <Label as='a' target="_blank" size='large' href='https://www.linkedin.com/in/rajiv-khushiram/' color='blue' ><i className="linkedin icon"> </i>
        LinkedIn
        </Label>
        <Label as='a' target="_blank"  size='large' href='https://github.com/Rajiv-Khushiram' color='orange' ><i className="github icon"> </i>
        Github
        </Label></Menu.Item>

             {/*    <Menu.Item><Button inverted={!fixed}>
              <Link2 to={routes.SIGN_UP}>  Register</Link2>
                </Button></Menu.Item>*/} 
              </Menu.Menu>
                  </Transition>
                </Container>
              </Menu>
              <HomepageHeading />
              {children}
            </Segment>
           
          </Visibility>

          
        </Responsive>
        </div>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
<React.Fragment>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    </React.Fragment>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomePageLayout = () => <ResponsiveContainer>
 
<Delayed waitBeforeShow={1200}>
<Particles> <div style={{backgroundImage: 'linear-gradient(#241f1f, #1b1c1d)'}}><div id="PROJECTS" style={{padding: '2em  2em  2em 2em'}}>
  <center> <Label  disabled   size='huge' color='brown' ribbon>
      iGroup-Assignment Hackathon
     </Label></center></div>
   <Card style={{ margin:'auto', width:'80%', maxWidth:'800px'}}>
   <div style={{ padding: '2em  2em  2em 2em', background: '#241f1f'}}>
   <Embed style={{  maxHeight:'200px !important'}}
    autoplay={false}
    color='white'
    hd={false}
    id='yk4_1qgG16I'
    iframe={{
      style: {
        padding: 10,

      },
    }}
    placeholder={logo}
    source='youtube'
  /></div>
    <Card.Content style={{maxWidth:'800px', margin:'auto', textAlign:'left'}}>
      <Card.Header>  </Card.Header>
      <Card.Meta>
        <span className='date'  style={{color:'white'}}> <strong style={{ paddingRight:'5px'}}>Role:</strong>Developer</span>
      </Card.Meta>
      <Card.Description>
      <List.Item as='a' style={{color:'orange'}}>
      <Icon name='right triangle' /> <strong  style={{color:'white', paddingRight:'5px'}}>Key Learnings:</strong> NodeJS + ReactJS + MongoDb + FirebaseHosting +Semantic UI 
      <List.Content>
      </List.Content>
    </List.Item><br></br>
    <u> <strong>Pitch:</strong></u>
      <p style={{ textIndent:'20px', fontSize: '1.33em' }}>

      This project addresses student Group/Team formation for assignments at all educational level. The purpose is to ensure that groups formed are relevant to their skill sets in order to maximise team learning opportunities among team members. Steps:
<br/>
1. Teachers/Lecturers define the set of skills required to complete the assignments, team formation date and releases it to the students .<br/>
2. The students rate themselves for the required skill/s and submit their ratings.<br/>
3. Backend processes Students are notified of group team members.
        </p>
      </Card.Description>
      <Card.Description>
    <hr/>
    <div style={{textAlign:"right"}}>
    <Label as='a' target="_blank" size='large' href='https://github.com/Rajiv-Khushiram/reactrk' color='orange' >
    Github
        </Label>
   
    <Label as='a' target="_blank" size='large' href='https://reactrkfirebasegcp.firebaseapp.com' color='blue' >
    Live
        </Label>
    </div>
        </Card.Description>
    </Card.Content>
  </Card>

  <br></br>
  <br></br>

   <hr></hr>
  <br></br>
  
    <div style={{padding: '2em  2em  2em 2em'}}>
  <center> <Label   disabled   size='huge' color='brown' ribbon>
      Reviews App Project
     </Label></center></div>
   <Card style={{margin:'auto', width:'90%', maxWidth:'800px'}}>
   <div style={{ padding: '2em  2em  2em 2em', background:'#201e1e'}}>
   <Embed style={{ maxHeight:'200px !important'}}
    autoplay={false}
    color='white'
    hd={false}
    id='x4BJbGYPbVA'
    iframe={{
      style: {
        padding: 10,
        background:'#201e1e'
      },
    }}
    placeholder={reviewslogo}
    source='youtube'
  /></div>
    <Card.Content style={{maxWidth:'800px', margin:'auto', textAlign:'left'}}>
      <Card.Header>  </Card.Header>
      <Card.Meta>
        <span className='date' style={{color:'white'}} > <strong style={{paddingRight:'5px'}}>Role:</strong> Project Manager</span>
      </Card.Meta>
      <Card.Description>
      <List.Item as='a' style={{color:'orange'}}>
      <Icon name='right triangle' /> <strong style={{color:'white', paddingRight:'5px'}}>Key Learnings:</strong> Camera API Integration,  React-Redux-Firebase, Severless architecture, Agile methodologies, Firebase API, CI/CD (Cloud build)
      <List.Content>
      </List.Content>
    </List.Item><br></br>
    <u><strong>Pitch:</strong></u>
      <p style={{textIndent:'20px', fontSize: '1.33em' }}>
          This web app allows sales agents to engage customers into reviewing a product.
          It does so by sending a text message to the customer by SMS containing the link for submitting reviews.
          Serverless functions and APIs integrations allow car dealers to track whenever their users have clicked the link send to them via SMS.
        </p>
      </Card.Description>
      <Card.Description>
      <hr/>
      <div style={{textAlign:"right"}}>
    <Label as='a' target="_blank" size='large' href='https://github.com/Rajiv-Khushiram/Reviews-App-For-Business' color='orange' >
    Github
        </Label>
   
    <Label as='a' target="_blank" size='large' href='https://rajivkhushiram-reviews-project.firebaseapp.com' color='blue' >
    Live
        </Label>
    </div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {/* <a>
        <Icon name='eye' />
        13 Views
      </a> */}
    </Card.Content>
  </Card>

  <br></br>
  <br></br>

  <hr></hr>
  <br></br>
  <br></br>

     <div style={{padding: '2em  2em  2em 2em'}}>
   <center><Label as='a'  disabled   size='huge' color='brown' ribbon>
   OO Design Patterns:   
     </Label></center></div>      
  <Card style={{ margin:'auto', width:'80%', maxWidth:'800px'}}>
              <Image src='http://d13z1xw8270sfc.cloudfront.net/origin/523870/1532954117402_avengersflagbunting.jpg' wrapped ui={false} />
    <Card.Content style={{maxWidth:'800px', margin:'auto',  textAlign:'left'}}>
  
      <Card.Meta>
        <span className='date'> <strong>Role:</strong> Developer</span>
      </Card.Meta>
      <Card.Description>
      <List.Item as='a'>
      <Icon name='right triangle' /> <strong>Key Learnings:</strong> JAVA, GoF Patterns, Design Patterns, Swing, Trello <br></br>
      </List.Item>
      <br></br>
      <u><strong>Pitch:</strong></u>
      <p style={{ textIndent:'20px', fontSize: '1.33em' }}>   This game provides a playfield of 10x10 honey comb grid whereby each grid unit represents a location on the board. Each player assumes control of the pieces that have been assigned to. On each turn the player can choose between which of his pieces is to be moved and which pieces ability is to be casted. The aim of the player is to take down the enemy team using coordinated movement and ability casting among the pieces in the team. 
      Created and made use of <strong>creational, structural</strong> and <strong>behavioral patterns</strong></p>
      </Card.Description>
      <Card.Description>
      <hr/>
      <div style={{textAlign:"right"}}>
    <Label as='a' target="_blank" size='large' href='https://github.com/Rajiv-Khushiram/Avengers_End_Game' color='orange' >
    Github
        </Label>
   
 
    </div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {/* <a>
        <Icon name='eye' />
        10 Views
      </a> */}
    </Card.Content>
  </Card><br></br><br></br></div></Particles>
  <Particles>  <Segment inverted vertical style={{ padding: '3em 3em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Interests:' />
              <List link inverted>
                <List.Item as='a'>JS animation Libraries</List.Item>
                <List.Item as='a'>Front End Transitions</List.Item>
                <List.Item as='a'>Design Patterns</List.Item>
                <List.Item as='a'>The Future</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Perks' />
              <List link inverted>
                <List.Item as='a'>Critical Thinker</List.Item>
                <List.Item as='a'>Musician</List.Item>
                <List.Item as='a'>Football Player</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Built With REACTJS, Semantic UI & FIREBASE
              </Header>
              <p>
                3rd Party dependencies: Particle JS 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment></Particles></Delayed>
</ResponsiveContainer>;

export default HomePageLayout;
