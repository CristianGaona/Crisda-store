import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // No aceptar campos extras
    forbidNonWhitelisted: true //Notificará al cliente que envia atributos que no son válidos
  }));
  await app.listen(3000);
}
bootstrap();
