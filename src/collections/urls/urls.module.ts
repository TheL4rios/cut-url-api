import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlSchema } from './entities/url.entity';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Url.name,
        schema: UrlSchema
      },
    ]),
    CoreModule
  ],
  controllers: [UrlsController],
  providers: [UrlsService]
})
export class UrlsModule {}
