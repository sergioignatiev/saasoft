<script setup lang="ts">
import { useCounterStore } from './stores/counter';
const store=useCounterStore()
</script>

<template>
 <div class="">

  <h1>SAASOFT {{ store.myInfo[0]?.name}}</h1>
 </div>
</template>
<script setup lang="ts">
</script>

