import React, { Component } from 'react';

class Search extends Component {
    state = {
        value: "",
    };

    onSearch(event) {
        // Update the state with the new input value
        this.setState({
            value: event.target.value,
        });

        // Call the parent component's `onSearch` method
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="flex flex-col items-center p-4">
                <p className="text-center text-lg mb-2">Filter by searching</p>
                <input
                    className="p-2 border border-gray-300 rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Type to search..."
                    value={this.state.value}
                    onChange={this.onSearch.bind(this)}
                />
            </div>
        );
    }
}

export default Search;

