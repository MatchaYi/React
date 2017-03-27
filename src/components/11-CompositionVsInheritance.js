import React, {Component} from 'react';


function FancyBorder (props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
function Welcome () {
    return (
        <FancyBorder>
            <h1>Welcome</h1>
            <p>Thank you for your visiting!</p>
        </FancyBorder>
    )
}
function Dialog (props) {
    return (
        <>
    ) 
 }

class CompositionVsInheritance extends Component {
    render () {
        return (
            <div>
                <Welcome />
            </div>
        )
    }
}
export default CompositionVsInheritance