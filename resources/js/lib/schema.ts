import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(3, { message: 'Please entere a longer name' }),
    subject: z.string().min(5, { message: 'Please enter a longer subject name' }),
    company: z.string().optional(),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    message: z.string().min(3, { message: 'Please enter a longer message for us to understand what is the problem' }),
});
