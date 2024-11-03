import { ApiProperty } from '@nestjs/swagger';

export class PaginationOptionsDto {
	@ApiProperty({
		required: true,
		type: 'string',
	})
	page: number;

	@ApiProperty({
		required: true,
		type: 'string',
	})
	offset: number;
}
