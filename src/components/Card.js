import React from 'react';
import Thumb from "./Thumb";

export default function Card (props) {
  let { id, profile, onUserChosen} = props;
  return (
    <div className="card"  onClick={()=>{ onUserChosen( {id} ) }}>
      <Thumb avatar={profile.avatar}/>
      <h2 className="headline">{profile.first_name} {profile.last_name} from {profile.country}</h2>
      <p className="paragraph">{profile.description}</p>    
    </div>
  )
}