import {places} from "./part3/data";
import {getImageUrl} from "./part3/utils";
import {useState} from "react";
import {useContext} from "react";
import {ImageSizeContext} from "./part3/Context";

export default function Part3() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    // 使用ImageSizeContext向下传递imageSize
    return (
        <>
            <ImageSizeContext.Provider value={imageSize}>
                <label>
                    <input
                        type="checkbox"
                        checked={isLarge}
                        onChange={e => {
                            setIsLarge(e.target.checked);
                        }}
                    />
                    Use large images
                </label>
                <hr/>
                <List/>
            </ImageSizeContext.Provider>
        </>
    )
}

function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place
                place={place}
            />
        </li>
    );
    return <ul>{listItems}</ul>;
}

function Place({place}) {
    return (
        <>
            <PlaceImage
                place={place}
            />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    );
}

function PlaceImage({place}) {
    // 从ImageSizeContext中读取上级组件传递的值
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
