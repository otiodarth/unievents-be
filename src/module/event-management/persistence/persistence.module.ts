import { Module } from '@nestjs/common';
import { TypeOrmPersistenceModule } from '../../../module/shared/infra/module/typeorm/typeorm-persistence.module';

@Module({
  imports: [TypeOrmPersistenceModule],
})
export class PersistenceModule {}
