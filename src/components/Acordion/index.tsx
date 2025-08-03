import type { ReactElement } from "react"
import { Accordion } from "../retroui/Accordion"

type AcordionProps = {
    type: 'single' | 'multiple',
    className: string,
    items: { title: string, content: string | ReactElement }[]
}

const RetroAcordion = ({
    type,
    className = "space-y-4 w-full",
    items,
}: AcordionProps) => {

    return (
        <Accordion type={type} collapsible className={className}>
            {items.map((item, idx) => (
                <Accordion.Item value={`item-${idx}`}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Content>
                        {item.content}
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default RetroAcordion;