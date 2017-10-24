import React, {Component} from 'react'

const buttonToggle = (wrappedComponent) => {
    return class ToggleWrapper extends Component {
        state = {
            isOpen: false
        }

        render() {
            const {isOpen} = this.state
            console.log('wrapped component: ', wrappedComponent)
            return(
                <section>
                    <p>
                        <button onClick={this.toggleVisbility}>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </p>
                    <wrappedComponent />
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