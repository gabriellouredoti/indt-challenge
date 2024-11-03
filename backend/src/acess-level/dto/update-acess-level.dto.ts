import { PartialType } from '@nestjs/swagger';
import { CreateAcessLevelDto } from './create-acess-level.dto';

export class UpdateAcessLevelDto extends PartialType(CreateAcessLevelDto) {}
