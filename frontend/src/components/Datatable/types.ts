export interface User {
	id: number;
	name: string;
	email: string;
	status: number;
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
}
