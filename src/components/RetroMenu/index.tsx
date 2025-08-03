import type { ReactNode } from "react";
import { Menu } from "../retroui/Menu";
import { Button } from "../retroui/Button";

type RetroMenuProps = {
    trigger: ReactNode,
    menuItems: { title: string, onClick?: () => {} }[]
}

const RetroMenu = ({
    trigger = <Button>Menu</Button>,
    menuItems,
}: RetroMenuProps) => {

    return (
        <Menu>
            <Menu.Trigger asChild>
                {trigger}
            </Menu.Trigger>
            <Menu.Content className="min-w-36">
                {menuItems.map((item) => (
                    <Menu.Item onClick={() => item?.onClick?.()}>{item.title}</Menu.Item>
                ))}
            </Menu.Content>
        </Menu>
    )
}

export default RetroMenu;