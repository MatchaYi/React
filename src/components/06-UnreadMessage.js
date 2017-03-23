import React, {Component} from 'react';

function  Mailbox (props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>hello!</h1>
            {unreadMessages.length > 0 &&  unreadMessages.length < 4 &&
               <h2>
                   You have {unreadMessages.length} unread messages.
               </h2>
            }
        </div>
    )
}
const message = ['1','2','3','4'];
const isTrue = false;
class UnreadMessage extends Component {
    render () {
        return (
            <div>
                <Mailbox unreadMessages={message}/>
                <div>hello, {isTrue?'react':'vue'}</div>
                {isTrue ?(
                    <button>login</button>
                ) : (
                    <button>logout</button>
                )
                }
            </div>
        )
    }
}

export default UnreadMessage
