import { Switch } from "../retroui/Switch";

type RetroSwitchProps = {
    label: string
}

const RetroSwitch = ({ label }: RetroSwitchProps) => {

    return (
        <div className="flex items-center space-x-2">
            <Switch id={label} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default RetroSwitch;