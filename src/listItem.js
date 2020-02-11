import React from 'react'
import './listItem.css'
import { fontAwesomeIcon, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

function ListItem(props){
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text}
                    onChange = { (e) =>{props.editedText(e.target.value, item.key)}} />
                    <span>
                        <FontAwesomeIcon className="faIcons" icon="trash"
                        onClick={ () => props.deleteItem(item.key)}/>
                    </span>
                </p>
            </div>
    })
    return(
        <div>
            <FlipMove easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItem;