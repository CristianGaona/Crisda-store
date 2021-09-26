import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { enviroments } from './enviroments';
import config from './config';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/module/user.module';
import { ProductModule } from './modules/products/module/product.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UserModule,
    ProductModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    {
    provide: 'TASKS',
    useFactory: async (http: HttpService) => {
      const tasks = await http
        .get('https://jsonplaceholder.typicode.com/todos')
        .toPromise();
      return tasks.data;
    },
    inject: [HttpService],
  },
  ],
})
export class AppModule {}
