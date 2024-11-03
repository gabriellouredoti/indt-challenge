export interface Option {
	id: number;
	description: string;
}

export interface CustomSelectProps {
	options: Option[];
	register: any;
	error?: {
		message?: string;
	};
	value?: number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
