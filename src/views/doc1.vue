<template>
    <div>
    	<pdf src="pdf/hors-EU.pdf" :page="1" />
    </div>
    </template>
    
    <script>
    import pdf from 'pdfvuer';
    export default {
      name: "doc1",
      data() {
        return {};
      },
      components: {
		pdf,
	},
      watch: {},
      created() {},
      methods: {},
    };
    </script>
    
    <style lang="scss" scoped>
   
    </style>
    