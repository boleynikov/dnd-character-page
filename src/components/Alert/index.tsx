import { Alert } from "../retroui/Alert"

type AlertProps = {
    title: string;
    description: string
}

const RetroAlert = ({ title, description }: AlertProps) => {

    return (
        <Alert>
            <Alert.Title>{title}</Alert.Title>
            <Alert.Description>
                {description}
            </Alert.Description>
        </Alert>
    )
}

export default RetroAlert;