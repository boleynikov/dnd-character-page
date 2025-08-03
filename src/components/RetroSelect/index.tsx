import { Select } from "../retroui/Select";

type RetroSelectProps = {
    placeholder?: string,
    options: string[]
}

const RetroSelect = ({
    placeholder,
    options
}: RetroSelectProps) => {

    return (
        <Select>
            <Select.Trigger className="w-60">
                <Select.Value placeholder={placeholder} />
            </Select.Trigger>
            <Select.Content>
                <Select.Group>
                    {options.map(option => (
                        <Select.Item value={option}>{option}</Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select>
    )
}

export default RetroSelect;