import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'

type Props = {
    errors: FieldErrors
    name: string
}

export const HookFormError = (props: Props) => {
    const { errors, name } = props
    return (
        <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
                <p className="text-xs text-red-600 mt-2" id="email-error">
                    {message}
                </p>
            )}
        />
    )
}
