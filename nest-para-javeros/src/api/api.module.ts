import { Module } from '@nestjs/common';
import { SharedModule } from 'shared/shared.module';
import { PersistenceModule } from 'persistence/persistence.module';
import { CoreModule } from 'core/core.module';

@Module({
    imports: [SharedModule, PersistenceModule, CoreModule]
})
export class ApiModule {}
