import React, {Component} from 'react';

function WarningMsg (props) {
    if(props.warn) {
        return null;
    }
    return <div>warning!</div>
}

class PreventRendering extends Component {
    constructor (props) {
        super(props);
        this.state = {showWarning: false};
        this.toggleClick = this.toggleClick.bind(this);
    }
    toggleClick () {
        this.setState({showWarning: !this.state.showWarning});
    }
    render () {
        return (
            <div>
                <WarningMsg warn={this.state.showWarning}/>
                <button onClick={this.toggleClick}>{this.state.showWarning ? 'Show' : 'Hide'}</button>
            </div>
        )
    }
}

export default PreventRendering