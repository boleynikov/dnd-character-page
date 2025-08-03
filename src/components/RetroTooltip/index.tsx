import type { ReactNode } from "react";
import { Tooltip } from "../retroui/Tooltip";

type RetroTooltipProps = {
    children: ReactNode,
    tooltip: string,
    variant?: "default" | "primary" | "solid"
}

const RetroTooltip = ({ children, tooltip, variant }: RetroTooltipProps) => {

    return (
        <Tooltip.Provider>
            <Tooltip>
                <Tooltip.Trigger asChild>
                    {children}
                </Tooltip.Trigger>
                <Tooltip.Content variant={variant}>{tooltip}</Tooltip.Content>
            </Tooltip>
        </Tooltip.Provider>
    )
}

export default RetroTooltip;