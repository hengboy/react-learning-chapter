import {useState} from "react";

function PartOne() {
    const [number, setNumber] = useState(0);

    function handleOnClick() {
        setNumber(number + 5);
        setNumber(42);
        setNumber(number => number + 1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleOnClick} style={{fontSize: 20}}> +3</button>
        </>
    )
}

function PartTwo() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        // 0 + 1 = 1、0 + 1 = 1
        setPending(pending => pending + 1);
        await delay(3000);
        // 1 - 1 = 0、1 -1 = 0
        setPending(pending => pending - 1);
        // 0 + 1 = 1、1 + 1 = 2
        setCompleted(completed => completed + 1);
    }

    return (
        <>
            <h3>
                等待：{pending}
            </h3>
            <h3>
                完成：{completed}
            </h3>
            <button onClick={handleClick}>
                购买
            </button>
        </>
    );
}

increment.toString = () => 'n => n+1';

function PartThree() {
    return (
        <>
            <TestCase
                baseState={0}
                queue={[1, 1, 1]}
                expected={1}
            />
            <hr/>
            <TestCase
                baseState={0}
                queue={[
                    increment,
                    increment,
                    increment
                ]}
                expected={3}
            />
            <hr/>
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment
                ]}
                expected={6}
            />
            <hr/>
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment,
                    42,
                ]}
                expected={42}
            />
        </>
    );
}

function TestCase({
                      baseState,
                      queue,
                      expected
                  }) {
    const actual = getFinalState(baseState, queue);
    return (
        <>
            <p>初始 state：<b>{baseState}</b></p>
            <p>队列：<b>[{queue.join(', ')}]</b></p>
            <p>预期结果：<b>{expected}</b></p>
            <p style={{
                color: actual === expected ?
                    'green' :
                    'red'
            }}>
                你的结果：<b>{actual}</b>
                {' '}
                ({actual === expected ?
                '正确' :
                '错误'
            })
            </p>
        </>
    );
}

function getFinalState(baseState, queue) {
    let finalState = baseState;
    for (let update of queue) {
        // 如果队列的对象为函数，为：更新函数，执行函数并把返回值赋值给finalState
        if (typeof update === 'function') {
            finalState = update(finalState);
        }
        // 如果是单值，则直接设置替换
        else {
            finalState = update;
        }
    }
    return finalState;
}


function increment(n) {
    return n + 1;
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export default function LearningNine() {
    return (
        <div>
            <h2>Part 1</h2>
            <PartOne/>
            <hr/>
            <h2>Part 2</h2>
            <PartTwo/>
            <hr/>
            <h2>Part 3</h2>
            <PartThree/>
        </div>
    );
}