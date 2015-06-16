var React = require('react');
var styles = require('./main.scss');
var MessageStore = require('../stores/MessageStore');
var ActionCreator = require('../actions/ActionCreator');

var TextField = require('./TextField');
var DropdownField = require('./DropdownField');


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: 'default', messages: '' };
    }

    componentDidMount() {
        MessageStore.bind('change', this.messageStoreChanged.bind(this))
    }

    componentWillUnmount() {
        MessageStore.unbind('change', this.messageStoreChanged)
    }

    messageStoreChanged() {
        this.setState({ messages: MessageStore.getAll() });
    }

    onClick(e) {
        ActionCreator.addMessage(this.state.input);
        this.setState({ input: '' });
    }

    onChange(e) {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div className="main">
                <DropdownField />

                <input type="text" value={ this.state.input } onChange={ this.onChange.bind(this) } />
                <button onClick={ this.onClick.bind(this) }>Create Message</button>

                <TextField data={ this.state.messages } />
                
            </div>
        );
    }
}

export default Main;