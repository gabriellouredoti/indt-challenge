import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getInfo(): string {
		return 'INDT challenge';
	}
}
