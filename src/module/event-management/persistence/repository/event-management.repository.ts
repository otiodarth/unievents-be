import { Injectable } from '@nestjs/common';
import { Event } from '@eventManagement/persistence/entity';
import { TypeOrmRepository } from '@shared/infra/module/typeorm/repository';

@Injectable()
export class EventManagementRepository extends TypeOrmRepository<Event> {
  async create(data: Event) {
    return this.repository.create(data);
  }
}
