<template>
  <div id="app">
    <section class="dashboard">
      <header>
        <!-- date range placeholder -->
      </header>
      <div class="dashboard__row">
        <latest-transactions-chart ref="latestTransactions" />
        <transaction-breakdown-chart ref="transactionBreakdown"  />
      </div>
      <div class="dashboard__row">
        <transaction-details-grid />
      </div>
    </section>
  </div>
</template>

<script>
import transactions from './data/transactions.js';

import LatestTransactionsChart from './components/LatestTransactionsChart.vue';
import TransactionBreakdownChart from './components/TransactionBreakdownChart.vue';
import TransactionDetailsGrid from './components/TransactionDetailsGrid.vue';

export default {
  name: 'app',
  components: {
    LatestTransactionsChart,
    TransactionBreakdownChart,
    TransactionDetailsGrid,
  },
  data() {
    return {
      transactions,
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
