import { string, boolean, z } from "zod";

export const basicFormValidationSchema = z.object({
  code: string()
    .nonempty("Code is required")
    .min(2, { message: "Too small code" })
    .max(16, { message: "Too large code" }),
  name: string()
    .nonempty("Name is required")
    .min(2, { message: "Too small name" })
    .max(32, { message: "Too large name" }),
  display_name: string()
    .nonempty("Display Name is required")
    .min(2, { message: "Too small display name" })
    .max(32, { message: "Too large display name" }),
  department: string().nonempty("Department is required"),
  is_active: string(),
  is_verified: string()
    
});
