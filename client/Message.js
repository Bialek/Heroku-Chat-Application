import React from 'react';
import styles from './css/MessageList.css';

const Message = props => { console.log(props);

return(
	<div className={styles.Message} style={{backgroundColor: props.color}}>
		<strong>{props.from}: </strong>
		<span>{props.text}</span>
	</div>
);
}    

export default Message;