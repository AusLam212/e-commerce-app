import React from "react";
import "./Preview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

function Preview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(({ id, ...otherItemProps }) => (
                            <CollectionItem key={id} {...otherItemProps} />
                        ))
                }
            </div>
        </div>
    )
}

export default Preview;