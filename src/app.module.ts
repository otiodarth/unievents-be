import { Module } from '@nestjs/common';
import { EventManagementModule } from './module/event-management/event.management.module';
import { AppConfigModule } from './module/shared/config/app-config.module';

@Module({
  imports: [AppConfigModule, EventManagementModule],
})
export class AppModule {}
