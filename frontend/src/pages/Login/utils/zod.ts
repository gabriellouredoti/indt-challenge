import { z } from "zod";

export type formRecoveryPasswordType = z.infer<typeof schemaLogin>;

export const schemaLogin = z.object({
	email: z.string({ required_error: "E-mail obrigatório" }).email({
		message: "E-mail inválido",
	}),
	password: z
		.string({ required_error: "Campo obrigatório." })
		.min(8, "Requer no mín. 8 caracteres.")
		.regex(/[A-Z]/, "Requer no mín. 1 letra maíuscula.")
		.regex(/[a-z]/, "Requer no mín 1 letra minúscula.")
		.regex(/[@*$!-]/, "Precisa ter algum dos caracteres @*$!-")
		.regex(/[0-9]/, "Requer no mín. 1 número.")
		.refine((val) => !/\s/.test(val), {
			message: "Não aceita espaços em branco",
		})
		.refine((s) => !s.includes(" ")),
});
