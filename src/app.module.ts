import { Module } from '@nestjs/common';
import { EventManagementModule } from '@eventManagement/event.management.module';
import { AppConfigModule } from '@shared/config/app-config.module';

@Module({
  imports: [AppConfigModule, EventManagementModule],
})
export class AppModule {}
