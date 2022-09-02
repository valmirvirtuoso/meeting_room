import { Request, Response, NextFunction } from 'express'
import { AnySchema } from 'yup'

const validationMiddleware = (schema: AnySchema) => async(req: Request, res: Response, next: NextFunction) => {

    try {
        const data = req.body
        const validatedData = await schema.validate(data)
        req.body = validatedData
        next()
    } catch (error: any) {
        return res.status(400).json({
            error: error.errors?.join(', ')
        })
    }

}

export { validationMiddleware }