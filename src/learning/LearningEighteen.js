import Part1 from "./eighteen/Part1";
import Part2 from "./eighteen/Part2";
import Part3 from "./eighteen/Part3";
import Part4 from "./eighteen/Part4";
import Part5 from "./eighteen/Part5";

export default function LearningEighteen() {
    return (<>
        <h1>Learning Eighteen</h1>
        <table>
            <tbody>
            <tr>
                <td><h2>Part 1（布拉格的行程安排）</h2></td>
            </tr>
            <tr>
                <td><Part1/></td>
            </tr>
            <tr>
                <td>
                    <hr/>
                </td>
            </tr>
            <tr>
                <td><h2>Part 2（通过事件处理函数 dispatch actions ）</h2></td>
            </tr>
            <tr>
                <td><Part2/></td>
            </tr>
            <tr>
                <td>
                    <hr/>
                </td>
            </tr>
            <tr>
                <td><h2>Part 3（发送消息时清空输入框 ）</h2></td>
            </tr>
            <tr>
                <td><Part3/></td>
            </tr>
            <tr>
                <td>
                    <hr/>
                </td>
            </tr>
            <tr>
                <td><h2>Part 4（切换 tab 时重置输入框内容 ）</h2></td>
            </tr>
            <tr>
                <td><Part4/></td>
            </tr>
            <tr>
                <td>
                    <hr/>
                </td>
            </tr>
            <tr>
                <td><h2>Part 5（从零开始实现 useReducer）</h2></td>
            </tr>
            <tr>
                <td><Part5/></td>
            </tr>
            </tbody>
        </table>
    </>);
}