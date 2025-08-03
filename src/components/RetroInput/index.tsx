import { useId } from "react";
import { Input } from "../retroui/Input";
import { Label } from "../retroui/Label";

type RetroInputProps = {
    label: string,
    placeholder: string,
    type?: string,

}

const RetroInput = ({
    label,
    placeholder,
    type
}: RetroInputProps) => {
    const id = useId();
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor={label}>{label}</Label>
            <Input type={type} id={id} placeholder={placeholder} />
        </div>
    )
}

export default RetroInput;