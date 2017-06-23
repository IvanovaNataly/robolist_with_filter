import React from 'react';

export default function Thumb({avatar}) {
    return (
	<div className="thumb">
		<img src={avatar}/>
	</div>
    )
}