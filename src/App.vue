<template>
  <div>
   <button @click="store.pushToItems">+</button>
 <the-input 
 v-for="item in items"
 :key="item.id"
 v-bind="item"
 v-model:marks="item.marks"
 v-model:type="item.type"
 v-model:login="item.login"
 v-model:password="item.password"
 @delete="store.deleteItem"
 />
<p>{{ items }}</p>
<section class="">
  <div class="m-10 bg-slate-100" v-for="item in splittedItems" :key="item.id">
    
    <p v-for="(mark,index) in item.marks" :key="index">{{ mark  }}</p>
  </div>
</section>
  </div>
</template>

<script lang="ts" setup>
import { type Account } from './types/account.ts';
import {useCounterStore} from './stores/counter.ts';
import { storeToRefs } from 'pinia';
import { ref,computed } from 'vue';
import TheInput from './components/TheInput.vue';
const store=useCounterStore()
const {items,splittedItems}=storeToRefs(store)

</script>

<style>

</style>