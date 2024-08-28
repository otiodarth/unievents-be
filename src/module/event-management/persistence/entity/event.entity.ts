import { DefaultEntity } from '@shared/infra/module/typeorm/entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'events' })
export class Event extends DefaultEntity<Event> {
  @Column({ type: 'varchar', nullable: false })
  description: string;
}
