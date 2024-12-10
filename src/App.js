import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";
import Slider from "./Slider";
import CheckBox from "./CheckBox";

class App extends Component {
    state = {
        data: [
           
            {
                name: "Iphone 15 Pro Max",
                price: 145000,
                brand: "Apple",
                image: "https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US.jpg?v=1695861362"
            },

            {
                name: "Google Pixel 9 Pro XL",
                price: 99000,
                brand: "Goggle",
                image: "https://mobilebuzzbd.com/wp-content/uploads/2024/08/Google-Pixel-9-Pro.jpg"
            },

            {
                name: "OnePlus 11 ",
                price: 70000,
                brand: "OnePlus",
                image: "https://adminapi.applegadgetsbd.com/storage/media/large/OnePlus-11-(3)-4957.jpg"
            },

            
            {
                name: "samsung S24 ultra",
                price: 103000,
                brand: "Samsung",
                image: "https://mobilebuzzbd.com/wp-content/uploads/2024/02/s24u.jpg",

                
            },


            {
                name: "Oneplus 12R",
                price: 53500,
                brand: "Oneplus",
                image: "https://adminapi.applegadgetsbd.com/storage/media/large/OnePlus-12R-Cool-Blue-1477.jpg"
            },

            {
                name: "Iphone 15",
                price: 85000,
                brand: "Apple",
                image: "https://www.maplestore.in/cdn/shop/files/iPhone_15_Yellow_PDP_Image_Position-1__en-IN_09d82a95-2a65-4371-abab-0b9169b93962.jpg?v=1701823355",

            },

            {
                name: "samsung S24 ultra",
                price: 103000,
                brand: "Samsung",
                image: "https://mobilebuzzbd.com/wp-content/uploads/2024/02/s24u.jpg",

                
            },

            {
                name: "OnePlus Nord 4",
                price: 40000,
                brand: "Oneplus",
                image: "https://kryinternational.com/wp-content/uploads/2024/11/OnePlus-Nord-4.jpg",

                
            },

            {
                name: "Iphone 14 pro",
                price: 129000,
                brand: "Iphone",
                image: "https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Silver_PDP_Image_Position-1a__WWEN.jpg?v=1692349508",
            },

            {
                name: "Pixel 9",
                price: 85000,
                brand: "Google",
                image: "https://adminapi.applegadgetsbd.com/storage/media/large/Pixel-9-Obsidian-9359.jpg"
            },

            {
                name: "samsung F23 5G",
                price: 18000,
                brand: "Samsung",
                image: "https://adminapi.applegadgetsbd.com/storage/media/large/Galaxy-F23-Copper-Blush-4149.jpg",

            },

            
            {
                name: "Iphone 13",
                price: 66000,
                brand: "Apple",
                image: "https://www.machines.com.my/cdn/shop/products/iPhone_13_Starlight_PDP_Image_Position-1A__GBEN_eed666d8-2df7-4944-b691-8ae534269958.jpg?v=1705598367"
            },

            
            {
                name: "samsung A55 5G",
                price: 42000,
                brand: "Samsung",
                image: "https://i0.wp.com/kryinternational.com/wp-content/uploads/2024/03/Samsung-A55.jpg",

            },


            {
                name: "Pixel 8",
                price: 70000,
                brand: "Google",
                image: "https://m.media-amazon.com/images/I/71aTjTMFiJL._AC_SL1500_.jpg"
            },
            
            {
                name: "Pixel 8 Pro",
                price: 75000,
                brand: "Google",
                image: "https://adminapi.applegadgetsbd.com/storage/media/large/Pixel-8-Pro-Bay-1840.jpg"
            },

            {
                name: "samsung s24 FE",
                price: 65000,
                brand: "Samsung",
                image: "https://mobilebuzzbd.com/wp-content/uploads/2024/11/Samsung-S24-FE-Gray-Color.jpg",

            },

            {
                name: "samsung A35 5G",
                price: 35000,
                brand: "Samsung",
                image: "https://img.drz.lazcdn.com/static/bd/p/f7f6ec3cf475180a70dbe8ecc6d99672.jpg_960x960q80.jpg_.webp",

            },
        ],
        filter: [],
        selectedBrands: [],
    };

    onCheck(checked, brand) {
        let selectedBrands = [...this.state.selectedBrands];
        if (checked) {
            selectedBrands.push(brand);
        } else {
            selectedBrands = selectedBrands.filter((b) => b !== brand);
        }

        const filtered = this.state.data.filter(
            (item) =>
                selectedBrands.length === 0 || selectedBrands.includes(item.brand)
        );

        this.setState({ selectedBrands, filter: filtered });
    }

    componentDidMount() {
        this.setState({ filter: this.state.data });
    }

    onSlide(value) {
        const filtered = this.state.data.filter((item) => item.price <= value);
        this.setState({ filter: filtered });
    }

    onSearch(value) {
        const filtered = this.state.data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        this.setState({ filter: filtered });
    }


    render() {
        return (
            <div>
                <div className="navbar bg-base-200 justify-center">
                    <a className="btn btn-ghost text-xl">Filter App</a>
                </div>

                <div className="m-4">
                    <div className="grid gap-4 sm:grid-cols-12">
                        <div className="sm:col-span-3 bg-Base-200 p-4 rounded-lg">
                            <div className="space-y-4">
                                <Search onSearch={this.onSearch.bind(this)} />
                                <Slider onSlide={this.onSlide.bind(this)} />
                                <div className="space-y-2 pl-5">
                                    <p className="font-semibold">Select Brand</p>
                                    <CheckBox name="Samsung" onCheck={this.onCheck.bind(this)} />
                                    <CheckBox name="Apple" onCheck={this.onCheck.bind(this)} />
                                    <CheckBox name="Oneplus" onCheck={this.onCheck.bind(this)} />
                                    <CheckBox name="Google" onCheck={this.onCheck.bind(this)} />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 gap-4">
                                {this.state.filter.map((item, index) => (
                                    <Card
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;








