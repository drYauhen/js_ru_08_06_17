import React, {Component} from 'react'

const buttonToggle = (wrappedComponent) => {
    return class ToggleWrapper extends Component {
        state = {
            isOpen: false
        }

        render() {
            const {isOpen} = this.state
            return(
                <section>
                    <p>
                        <button onClick={this.toggleVisbility}>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </p>
                    {isOpen ?  wrappedComponent : null}
                </section>
            )
        }

        toggleVisbility = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}

export default buttonToggle