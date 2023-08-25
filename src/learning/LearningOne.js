import AllowChangeColorClock from "../clock/AllowChangeColorClock";
import Gallery from "../gallery/Gallery";
import PackingList from "../packlist/PackingList";
import DrinkList from "../drink/Drink";

/**
 * 第一章节
 * @returns {JSX.Element}
 * @constructor
 */
export default function LearningOne() {
    return (
        <div>
            <h2>可切换颜色的时钟：</h2>
            <AllowChangeColorClock/>
            <h2>科学家列表：</h2>
            <Gallery/>
            <h2>行李清单：</h2>
            <PackingList/>
            <h2>饮品列表：</h2>
            <DrinkList/>
        </div>
    );
}