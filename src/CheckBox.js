import React, { Component } from "react";

class CheckBox extends Component {
    state = {
        checked: false,
    };

    onCheckBoxChange(event) {
        const checked = event.target.checked;
        this.setState({ checked });
        this.props.onCheck(checked, this.props.name);
    }

    render() {
        return (
            <div>
                <input
                    checked={this.state.checked}
                    style={{ marginRight: 15 }}
                    type="checkbox"
                    onChange={this.onCheckBoxChange.bind(this)}
                />
                {this.props.name}
            </div>
        );
    }
}

export default CheckBox;
