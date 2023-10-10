import Part1 from "./nineteen/Part1";
import Part2 from "./nineteen/Part2";
import Part3 from "./nineteen/Part3";

export default function LearningNineteen() {
    return (<>
        <h1>Learning Nineteen</h1>
        <h2>Part 1（使用Context深度传递数据）</h2>
        <Part1/>
        <hr/>
        <h2>Part 2（Context会穿过中间层级的组件）</h2>
        <Part2/>
        <hr/>
        <h2>Part 3（用 context 替代逐层 props ）</h2>
        <Part3/>
    </>);
}