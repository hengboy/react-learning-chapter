import "./style.css"
import {useState} from "react";

export default function Part4() {
    const [isActive, setIsActive] = useState(false);
    let backgroundClassName = 'background';
    let pictureClassName = 'picture';
    if (isActive) {
        pictureClassName += ' picture--active';
    } else {
        backgroundClassName += ' background--active';
    }
    return (
        <div
            onClick={() => setIsActive(false)}
            className={backgroundClassName}>
            <img
                onClick={e => {
                    e.stopPropagation();
                    setIsActive(true);
                }}
                className={pictureClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
            />
        </div>
    );
}