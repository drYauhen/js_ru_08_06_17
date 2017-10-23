import React, {Component} from 'react'


const ButtonToggle = (wrappedComponent) => {
    console.log('buttonToggle this.props.component', wrappedComponent)
        // console.log("---------------------"),

    return class ToggleWrapper extends Component {
        state = {
            isOpen: false
        }

        render() {
            return(
                <section>
                    <button onClick={this.toggleVisbility()}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                    {wrappedComponent}
                </section>
            )
        }

        toggleVisbility = () => () => {
            this.setState({
                isOpen: !isOpen
            })
        }
    }
}

export default ButtonToggle