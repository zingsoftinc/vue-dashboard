<template>
  <div id="app">
    <section class="dashboard">
      <header>
        <h4>Date Range</h4>
        <v-date-picker mode="range" v-model="range"/>
      </header>
      <div class="dashboard__row">
        <latest-transactions-chart ref="latestTransactions" :entries="filteredTransactions" />
        <transaction-breakdown-chart ref="transactionBreakdown" :entries="filteredTransactions" />
      </div>
      <div class="dashboard__row">
        <transaction-details-grid :entries="filteredTransactions" @mouseover="handleEntryHover"/>
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
      range: {
        start: new Date(new Date().setDate(1)),
        end: new Date() 
      }
    }
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter(entry => {
        return (
          entry.timestamp >= this.range.start.getTime() &&
          entry.timestamp < this.range.end.getTime()
        );
      });
    }
  },
  methods: {
    handleEntryHover(e) {

      // Obtain references to the charts
      let latestTransactions = this.$refs.latestTransactions.$refs.chart;
      let transactionBreakdown = this.$refs.transactionBreakdown.$refs.chart;

      debugger;
      // Set our guide corresponding to the correct timestamp
      
      latestTransactions.setguide({
        keyvalue: e.detail.ZGData.data.timestamp,
      });
      // Highlight the pie slice in focus
      const indexInFocus = transactionBreakdown
        .getseriesdata()
        .findIndex(o => o.text === e.detail.ZGData.data.purchase_type);
      transactionBreakdown.showhoverstate({
        plotindex: indexInFocus,
        nodeindex: 0
      });
    }
  }
}
</script>
