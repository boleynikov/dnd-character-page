import { RadioGroup } from "../retroui/Radio";

type RetroRadioGroupProps = {
    items: { title: string, variant?: "default" | "outline" | "solid" }[]
}

const RetroRadioGroup = ({ items }: RetroRadioGroupProps) => {

    return (
        <div className="flex gap-4">
            <RadioGroup>
                {items.map(item => (
                    <div className="flex items-center space-x-2">
                        <RadioGroup.Item value={item.title} variant={item.variant} />
                        <label htmlFor={item.title}>{item.title}</label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default RetroRadioGroup;