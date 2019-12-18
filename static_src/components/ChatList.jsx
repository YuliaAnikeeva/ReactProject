import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ChatIcon from 'material-ui/svg-icons/communication/textsms';


export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <ListItem primaryText="Maria Chat" leftIcon={<ChatIcon />} />
                <ListItem primaryText="Elena Chat" leftIcon={<ChatIcon />} />
                <ListItem primaryText="Ivan Chat" leftIcon={<ChatIcon />} />
            </List>
        )
    }
}