import type { ReactNode } from "react"
import { Button } from "../retroui/Button"
import { Popover } from "../retroui/Popover"

type RetroPopoverProps = {
    title: string,
    children: ReactNode
}

const RetroPopover = ({ title, children }: RetroPopoverProps) => {

    return (
        <Popover>
            <Popover.Trigger asChild>
                <Button>{title}</Button>
            </Popover.Trigger>
            <Popover.Content className="w-80 font-sans">
                {children}
            </Popover.Content>
        </Popover>
    )
}

export default RetroPopover;