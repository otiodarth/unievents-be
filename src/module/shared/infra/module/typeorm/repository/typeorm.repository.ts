import { Injectable } from '@nestjs/common';
import { Repository, ObjectLiteral } from 'typeorm';

@Injectable()
export class TypeOrmRepository<T extends ObjectLiteral> {
  constructor(readonly repository: Repository<T>) {}
}
