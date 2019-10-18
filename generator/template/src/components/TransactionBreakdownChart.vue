<template>
   <zingchart :data="chartConfig"  :height="'100%'" ref="chart"/> 
</template>

<script>
export default {
  props: ['entries'],
  data() {
    return {
    };
  },
  computed: {

    chartConfig() {
      const colors = [
        {
          backgroundColor: '#04A3F5',
          hoverState: {
            backgroundColor: '#45D6C4'
          }
        },
        {
          backgroundColor: '#98D1EE',
          hoverState: {
            backgroundColor: '#45D6C4'
          }
        },
                {
          backgroundColor: '#295A73',
          hoverState: {
            backgroundColor: '#45D6C4'
          }
        },
      ];
      const config ={
        type: 'pie',
        tooltip: {
          text: '%npv%'
        },
        plotarea: {
          margin: '5'
        },
        plot: {
          valueBox: {
            fontSize: 10,
            text: '%t'
          },
          hoverState: {
         	  borderWidth: 2,
          }
        },
        // TODO: Format the data and pass it to the series.
        series: []
      };
      return config;
    },
  }
}
</script>