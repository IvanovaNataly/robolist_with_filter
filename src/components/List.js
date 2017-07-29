import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {

 constructor() {
        super();
        this.state = {data: [],
                    filteredData: []}
    }

    componentWillMount() {
        fetch("./static/data/MOCK_DATA.json")
            .then((response) => {return response.json()})
            .then((data) => { this.setState({data: data,
                                            filteredData: data}) })
    }
 
    setUserChosen(chosenId) {
        let chosenUser = this.state.data.find( function(element) {
            return element.id === chosenId
        } )
        this.props.updateUser(chosenUser);
    }

    renderProfiles() {
        let profiles = [];
        for (let i=0; i<this.state.filteredData.length; i++) {
            profiles.push( <Card key={this.state.filteredData[i].id} 
                                id={this.state.filteredData[i].id} 
                                profile={this.state.filteredData[i]}
                                onUserChosen={this.setUserChosen.bind(this, this.state.filteredData[i].id)}/>)
        }
       
        return profiles;
    }

    setFilteredList(value) {
        let filteredNames = this.state.data.filter(function(el){
                // return el.first_name.toLowerCase().indexOf(value.toLowerCase()) > -1 || 
                //         el.last_name.toLowerCase().indexOf(value.toLowerCase()) > -1;
                let name = el.first_name.toLowerCase() + " " + el.last_name.toLowerCase();
                return name.indexOf(value.toLowerCase()) > -1
            })
        this.setState({ filteredData: filteredNames });
    }

    render() {
        return (
        <div className="cards-list"> 
            <div className="cards-container">  
                <input className="name-input" onChange={ (event) => this.setFilteredList(event.target.value) }></input>
                {this.renderProfiles()}
            </div>
        </div>
        )
    }
   

}