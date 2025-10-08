<template>
  <div>
    <section class="flex items-center gap-2">
   <button class="8-24 h-8" @click="store.pushToItems">+</button>
   <p>Учетная запись</p>
    </section>
    <p>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
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

  </div>
</template>

<script lang="ts" setup>

import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia'
import TheInput from '@/components/TheInput.vue';
const store=useCounterStore()
const {items}=storeToRefs(store)

</script>

<style>

</style>