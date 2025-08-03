import type { ReactNode } from "react";
import { Button } from "../retroui/Button";
import { Dialog } from "../retroui/Dialog";
import { Text } from "../retroui/Text";

type RetroDialogProps = {
    trigger?: ReactNode,
    dialogHeaderText?: string,
    onConfirm: () => {},
    confirmButtonText: string,
    confirmDescription: ReactNode
}

const RetroDialog = ({
    trigger = <Button>Open Dialog</Button>,
    dialogHeaderText,
    onConfirm,
    confirmButtonText,
    confirmDescription
}: RetroDialogProps) => {

    return (
        <Dialog>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Content>
                {dialogHeaderText && (
                    <Dialog.Header>
                        <Text as="h5">{dialogHeaderText}</Text>
                    </Dialog.Header>
                )}
                <section className="flex flex-col gap-4 p-4">
                    <section className="text-xl">
                        {confirmDescription}
                    </section>
                    <section className="flex w-full justify-end">
                        <Dialog.Trigger asChild>
                            <Button onClick={() => onConfirm()}>{confirmButtonText}</Button>
                        </Dialog.Trigger>
                    </section>
                </section>
            </Dialog.Content>
        </Dialog>
    )
}

export default RetroDialog;