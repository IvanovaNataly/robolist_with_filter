import React, { Component } from 'react';
import List from './List'; 
import TopBar from './TopBar'; 
import Profile from './Profile'; 


export default class App extends Component {
  constructor() {
        super();
        this.state = { profile: {}
        }
    }

    updateUserState(profile) {
        this.setState({profile});
    }

    render() {
        return (
        <div className="app">
            <TopBar/>
            <main className="content">
                <List updateUser={this.updateUserState.bind(this)} />
                <Profile profile={this.state.profile}/>
            </main>
        </div>
        )
    }
}