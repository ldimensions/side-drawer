import React, { Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickhandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }
  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render(){
    let backDrop;
    if(this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerClickhandler={this.drawerToggleClickhandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{}}>
          <p>This is the page conetent</p>
        </main>
      </div>
    );
  }
}

export default App;
