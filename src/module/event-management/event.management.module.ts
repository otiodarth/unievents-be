import { Module } from '@nestjs/common';
import { PersistenceModule } from '@eventManagement/persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
})
export class EventManagementModule {}
