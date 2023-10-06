import {useState} from "react";

let images = [{
    place: 'Penang, Malaysia',
    src: 'https://i.imgur.com/FJeJR8M.jpg'
}, {
    place: 'Lisbon, Portugal',
    src: 'https://i.imgur.com/dB2LRbj.jpg'
}, {
    place: 'Bilbao, Spain',
    src: 'https://i.imgur.com/z08o2TS.jpg'
}, {
    place: 'Valparaíso, Chile',
    src: 'https://i.imgur.com/Y3utgTi.jpg'
}, {
    place: 'Schwyz, Switzerland',
    src: 'https://i.imgur.com/JBbMpWY.jpg'
}, {
    place: 'Prague, Czechia',
    src: 'https://i.imgur.com/QwUKKmF.jpg'
}, {
    place: 'Ljubljana, Slovenia',
    src: 'https://i.imgur.com/3aIiwfm.jpg'
}];
export default function Part5() {
    const [index, setIndex] = useState(0);
    const hasNext = index < images.length - 1;

    function handleClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    let image = images[index];
    return (
        <>
            <button onClick={handleClick}>
                下一张
            </button>
            <h3>
                {images.length} 张图片中的第 {index + 1} 张
            </h3>
            <img key={image.src} src={image.src} style={{width: 200, height: 200}} alt={image.place}/>
            <p>
                {image.place}
            </p>
        </>
    );
}