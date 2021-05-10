import React from "react";
import SHOP_DATA from "./ShopData";
import Preview from "../../components/Preview/Preview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <Preview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;