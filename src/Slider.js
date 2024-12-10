import React, { Component } from 'react';

class Slider extends Component {
    state = { 
        value: 200000 // Default value for the slider
    };

    onSlide(event){
        console.log(event.target.value);

        // update state
        this.setState({
            value: event.target.value
        });

        // call parent function
        this.props.onSlide(event.target.value);

    }

    render() { 
        return (
            <div className="p-4 lg:pl-10">
                <div className="flex flex-col items-center lg:items-start w-full">
                    <input 
                        className="p-2 border border-gray-300 rounded-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-2/5 focus:outline-none focus:ring-2 focus:ring-base-500"
                        min="1000"
                        max="200000"
                        type="range"
                        value={this.state.value}
                        onChange={this.onSlide.bind(this)}
                    />
                    
                    <p className="mt-4 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        Filter item by pricing: <strong>{this.state.value}</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default Slider;


