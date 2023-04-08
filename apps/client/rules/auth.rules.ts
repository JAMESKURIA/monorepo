import { ID_NUMBER_REGEX } from '@mono/types'
import * as yup from 'yup'

export const loginValidationSchema = yup
    .object({
        idNo: yup
            .string()
            .matches(RegExp(ID_NUMBER_REGEX), {
                message: 'Please enter a valid National Id Number',
            })
            .required('Required'),
        password: yup.string().min(6).required('Required'),
    })
    .required()

export type LoginFormValues = yup.InferType<typeof loginValidationSchema>
