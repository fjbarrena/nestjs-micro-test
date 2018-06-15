import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VolumeModule } from './volume/volume.module';

@Module({
  imports: [UserModule, VolumeModule],
  controllers: [AppController],
  providers: [ AppService ]
})
export class AppModule {}
