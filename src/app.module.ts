import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module'
import { AggregatorModule } from './aggregator/aggregator.module';

@Module({
  //imports: [TransactionModule, AggregatorModule],
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
