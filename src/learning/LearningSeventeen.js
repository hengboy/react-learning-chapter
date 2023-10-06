import Part1 from "./seventeen/Part1";
import Part2 from "./seventeen/Part2";
import Part3 from "./seventeen/Part3";
import Part4 from "./seventeen/Part4";
import Part5 from "./seventeen/Part5";
import Part6 from "./seventeen/Part6";

export default function LearningSeventeen() {
    return (
        <>
            <h1>Learning Seventeen</h1>
            <table>
                <tbody>
                <tr>
                    <td>
                        <h2>Part1</h2>
                        <Part1/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Part2（修复丢失的输入框文本）</h2>
                        <Part2/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Part3（交换两个表单字段）</h2>
                        <Part3/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Part4（重置详情表单）</h2>
                        <Part4/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Part5（清除正在加载的图片）</h2>
                        <Part5/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Part6（修复列表中错位的state）</h2>
                        <Part6/>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}