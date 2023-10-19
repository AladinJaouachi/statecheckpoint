import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullname: "Ronaldo",
        bio: "the best in the world",
        imgsrc:
          "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1icwxY.img",
        profession: "joueur de football"
      },
      bool: true,
      mountTime: new Date(),
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ bool: !this.state.bool });
  };
  calculateMountTime = () => {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - this.state.mountTime) / 1000); // Calculate time in seconds
    return elapsedTime;
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate(); // Force a re-render to update the time
    }, 1000); // Update time every second
  }
  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component is unmounted
  }





  render() {
    return (
      <>
       <Card style={{ width: "18rem" }}>
        {this.state.bool ? <> 
        <Card.Img variant="top" src={this.state.person.imgsrc} />
        <Card.Body>
            <Card.Title>{this.state.person.fullname}</Card.Title>
            <Card.Text>{this.state.person.bio}</Card.Text>
            <Card.Text>{this.state.person.profession}</Card.Text>
          </Card.Body> </>: <> </> }
        
        </Card>
        <Button variant="primary" onClick={()=> this.updateState()} > {this.state.bool ? "hide" : "show"} </Button>
        
     
        <p>Time since mount: {this.calculateMountTime()} seconds</p> 
      </>
    );
  }
}
