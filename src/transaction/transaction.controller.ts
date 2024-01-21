import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/transaction')
  async getAllTransactions() {
    return this.transactionService.getAllTransactions();
  }

}