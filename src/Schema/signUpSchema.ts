import {z} from 'zod'

export const usernameValidation = z 
    .string()
    .min(2 , "Username must be atleast have 2 character")
    .max(20 , "Username shouldn't have more than 20 character")
    
export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email Address"}),
    password: z.string().min(6,{message:"password be at least 6 characters"})
})

