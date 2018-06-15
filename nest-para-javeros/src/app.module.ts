import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { PersistenceModule } from './persistence/persistence.module';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [SharedModule, PersistenceModule, CoreModule, ApiModule],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {}
