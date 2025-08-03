import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsPanels, TabsTrigger, TabsTriggerList } from "../retroui/Tab";

type RetroTabsProps = {
    items: { title: string, content: ReactNode }[]
}

const RetroTabs = ({ items }: RetroTabsProps) => {

    return (
        <Tabs>
            <TabsTriggerList>
                {items.map(item => (
                    <TabsTrigger>{item.title}</TabsTrigger>
                ))}
            </TabsTriggerList>
            <TabsPanels>
                {items.map(item => (
                    <TabsContent>{item.title}</TabsContent>
                ))}
            </TabsPanels>
        </Tabs>
    )
}

export default RetroTabs;