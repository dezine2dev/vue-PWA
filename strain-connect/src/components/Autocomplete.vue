<template>
  <div class="autocomplete">
    <md-input
	    type="text"
	    v-model="search"
	    @input="onChange"
	   />
    <ul
	    v-show="isOpen"
	    class="autocomplete-results"
	  >
    <li
	    v-for="(result, i) in results"
	    :key="i"
	    @click="setResult(result)"
	    class="autocomplete-result"
	  >
	    {{ result }}
	  </li>
  </ul>
  </div>
</template>

<style>
  .autocomplete {
    position: relative;
    width: 130px;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>

<script>
  export default {
    name: 'Autocomplete',
    data() {
      return {
        search: '',
      };
    },
    props: {
      items: {
        type: Array,
        required: false,
        default: () => [],
      },
    },
    data() {
      return {
        search: '',
        results: [],
        isOpen: false,
      };
    },
    methods: {
      onChange() {
        this.isOpen = true;
        this.filterResults();
      },
      filterResults() {
        this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      },
      setResult(result){
      	this.search = result;
      	this.isOpen = false;
      }
    },
  }
</script>
</script>