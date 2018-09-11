import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AnyExceptionFilter } from './common/exception-filter/any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AnyExceptionFilter());

  const options = new DocumentBuilder()
    .setTitle('Conference API example')
    .setDescription('The Conference API description')
    .setVersion('1.0')
    .addTag('conferences', 'CRUD operation of conferences')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
