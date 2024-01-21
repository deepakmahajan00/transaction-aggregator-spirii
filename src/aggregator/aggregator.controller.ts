import { Controller, Get, Param } from '@nestjs/common';
import { TransactionService } from '../transaction/transaction.service';
import { AggregatorService } from './aggregator.service';

@Controller('aggregator')
export class AggregatorController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly aggregatorService: AggregatorService,
  ) {}

  @Get('user/:userId')
  async getUserAggregatedData(@Param('userId') userId: string): Promise<any> {
    const transactions = await this.transactionService.getTransactions();
    const userTransactions = transactions.filter((t) => t.userId === userId);
    return this.aggregatorService.aggregateTransactions(userTransactions);
  }

  @Get('payouts')
  async getAggregatedPayouts(): Promise<any> {
    const transactions = await this.transactionService.getTransactions();
    const payoutTransactions = transactions.filter((t) => t.type === 'payout');
    return this.aggregatorService.aggregatePayouts(payoutTransactions);
  }
}