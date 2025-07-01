import { Button, Flex, Layout, Select } from "antd";

export default function BasicLayout({ children }) {
    return <Layout>
        <Layout.Header style={{ backgroundColor: "white" }}>
            <div className="flex items-center justify-between px-64">
                <div>
                    <span className="text-xl font-bold ">Down Any Video</span>
                </div>
                <Flex gap={8}>
                    <Button type="link">首页</Button>
                    <Button type="link">如何使用</Button>
                    <Button type="link">常见问题</Button>
                    <Select
                        defaultValue="zhCN"
                        options={[
                            { value: "zhCN", label: "简体中文" },
                            { value: "zhTW", label: "繁体中文" },
                            { value: "enUS", label: "English" },
                        ]}
                    />
                </Flex>
            </div>
        </Layout.Header>
        <Layout.Content style={{ backgroundColor: "white" }}>  {children}  </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
    </Layout>;
}