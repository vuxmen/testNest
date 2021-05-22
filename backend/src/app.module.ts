import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConnectionFactory } from './db_connection';
import { UserModule } from 'src/Module/User/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DBConnectionFactory,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
