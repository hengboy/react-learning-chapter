import Heading from "./part2/Heading";
import Section from "./part2/Section";
import {LevelContext} from "./part2/LevelContext";
import './part2/style.css';

export default function Part2() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post
                title="旅行者，你好！"
                body="来看看我的冒险。"
            />
            <AllPosts/>
        </Section>
    );
}

function AllPosts() {
    // 覆盖上级Section设置的Context值
    // 所有下级都以新覆盖的值为准
    return (
        <Section>
            <LevelContext.Provider value={4}>
                <Heading>帖子</Heading>
                <RecentPosts/>
            </LevelContext.Provider>
        </Section>
    );
}

function RecentPosts() {
    return (
        <Section>
            <Heading>最近的帖子</Heading>
            <Post
                title="里斯本的味道"
                body="...那些蛋挞！"
            />
            <Post
                title="探戈节奏中的布宜诺斯艾利斯"
                body="我爱它！"
            />
        </Section>
    );
}

function Post({
                  title, body
              }) {
    return (
        <Section isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    );
}
