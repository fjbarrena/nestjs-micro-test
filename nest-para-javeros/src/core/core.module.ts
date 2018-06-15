import { Module } from '@nestjs/common';
import { SharedModule } from 'shared/shared.module';
import { PersistenceModule } from 'persistence/persistence.module';

@Module({
    imports: [SharedModule, PersistenceModule]
})
export class CoreModule {}
