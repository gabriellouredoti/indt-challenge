import { z } from "zod";

export type formRegisterUserType = z.infer<typeof schemaRegisterUser>;

export const schemaRegisterUser = z
	.object({
		name: z
			.string({
				required_error: "Nome não pode estar vazio!",
			})
			.min(3, { message: "Campo nome requer no mínimo 3 caracteres!" })
			.max(30, { message: "Campo nome requer no máximo 30 caracteres!" })
			.regex(/^\S.*\S$/, {
				message:
					"O Nome não pode começar ou terminar com espaços em branco.",
			})
			.regex(/^[a-zA-ZÀ-ÿçÇ]+(\s+[a-zA-ZÀ-ÿçÇ]+)*$/, {
				message:
					"O campo nome deve conter caracteres alfabéticos, incluindo acentuação e 'ç'",
			}),
		surname: z
			.string({
				required_error: "Sobrenome não pode estar vazio!",
			})
			.min(3, { message: "Campo nome requer no mínimo 3 caracteres!" })
			.max(30, { message: "Campo nome requer no máximo 30 caracteres!" })
			.regex(/^\S.*\S$/, {
				message:
					"O Nome não pode começar ou terminar com espaços em branco.",
			})
			.regex(/^[a-zA-ZÀ-ÿçÇ]+(\s+[a-zA-ZÀ-ÿçÇ]+)*$/, {
				message:
					"O campo nome deve conter caracteres alfabéticos, incluindo acentuação e 'ç'",
			}),
		email: z.string({ required_error: "E-mail obrigatório" }).email({
			message: "E-mail inválido",
		}),
		profile_id: z
			.number({ message: "Campo obrigatório!" })
			.transform((value: number) => value.toString()),
		password: z
			.string({ required_error: "Campo obrigatório." })
			.min(8, "Requer no mín. 8 caracteres.")
			.trim()
			.regex(/[A-Z]/, "Requer no mín. 1 letra maíuscula.")
			.regex(/[a-z]/, "Requer no mín 1 letra minúscula.")
			.regex(/[@*$!-]/, "Precisa ter algum dos caracteres @*$!-")
			.regex(/[0-9]/, "Requer no mín. 1 número.")
			.refine((val) => !/\s/.test(val), {
				message: "Não aceita espaços em branco",
			})
			.refine((s) => !s.includes(" ")),
		confirmPassword: z
			.string({ required_error: "Campo obrigatório." })
			.min(8, "Requer no mín. 8 caracteres.")
			.trim()
			.regex(/[A-Z]/, "Requer no mín. 1 letra maíuscula.")
			.regex(/[a-z]/, "Requer no mín 1 letra minúscula.")
			.regex(/[@*$!-]/, "Precisa ter algum dos caracteres @*$!-")
			.regex(/[0-9]/, "Requer no mín. 1 número.")
			.refine((val) => !/\s/.test(val), {
				message: "Não aceita espaços em branco",
			})
			.refine((s) => !s.includes("Não aceita espaços em branco")),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Senhas não conferem.",
		path: ["confirmPassword"],
	});
