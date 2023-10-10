import Heading from "./part1/Heading";
import Section from "./part1/Section";
import './part1/style.css';

export default function Part1() {
    return (
        <>
            <Section>
                <Heading>主标题</Heading>
                <Heading>副标题</Heading>
                <Heading>子标题</Heading>
                <Heading>子子标题</Heading>
                <Heading>子子子标题</Heading>
                <Heading>子子子子标题</Heading>
            </Section>
            <hr/>
            <Section>
                <Heading>主标题</Heading>
                <Section>
                    <Heading>副标题</Heading>
                    <Heading>副标题</Heading>
                    <Heading>副标题</Heading>
                    <Section>
                        <Heading>子标题</Heading>
                        <Heading>子标题</Heading>
                        <Heading>子标题</Heading>
                        <Section>
                            <Heading>子子标题</Heading>
                            <Heading>子子标题</Heading>
                            <Heading>子子标题</Heading>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </>
    );
}