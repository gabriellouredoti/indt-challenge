import { Profile } from "../../services/users/types";

export interface User {
	id?: number;
	name: string;
	surname: string;
	email: string;
	status?: number | string;
	profile_id?: number | string;
	profiles?: Profile | any;
}

export interface UserTableProps {
	users: User[];
	totalRecords: number;
	onToggleStatus: (userId: number) => void;
	onEdit: (userId: number) => void;
	onView?: (userId: number) => void;
	onPageChange: (newPage: number) => void;
	offset?: number;
	totalPages: number;
	activateActions?: boolean;
}
