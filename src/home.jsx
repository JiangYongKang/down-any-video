import { Collapse, Input } from "antd";

export default function Home() {



    return <div className="mx-64">
        <div className="py-16 text-center">
            <span className="text-3xl font-bold">Free Online Video Downloader</span>
        </div>
        <div className="text-center">
            <Input.Search style={{ width: 512 }} size="large" placeholder="input search text" onSearch={value => console.log(value)} enterButton="解析链接"/>
        </div>
        {/*<div className="py-16 text-center">*/}
        {/*    <span className="text-xl font-bold">使用说明</span>*/}
        {/*</div>*/}
        <div className="py-16 text-center">
            <div className="mb-8">
                <span className="text-xl font-bold">支持平台</span>
            </div>
            <Collapse items={[
                {
                    key: "1",
                    label: "This is panel header 1",
                    children: <p>A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.</p>,
                },
                {
                    key: "2",
                    label: "This is panel header 2",
                    children: <p>A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.</p>,
                },
                {
                    key: "3",
                    label: "This is panel header 3",
                    children: <p>A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.</p>,
                },
            ]} defaultActiveKey={["1"]} onChange={v => console.log(v)}/>
        </div>
        <div className="py-16 text-center">
            <div className="mb-8">
                <span className="text-xl font-bold">常见问题</span>
            </div>
            <Collapse items={[
                {
                    key: "1",
                    label: "This is panel header 1",
                    children: <p>A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.</p>,
                },
                {
                    key: "2",
                    label: "This is panel header 2",
                    children: <p>A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.</p>,
                },
                {
                    key: "3",
                    label: "This is panel header 3",
                    children: <p>A dog is a type of domesticated animal.
                        Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.</p>,
                },
            ]} defaultActiveKey={["1"]} onChange={v => console.log(v)}/>
        </div>
    </div>;
}