<template>
  <div>
    <h1>{{ splittedItems }}</h1>
    <section>
        <div v-for="item in splittedItems" :key="item.id">
          
            <p>Логин:{{ item.login||'Не Введен' }}</p>
            <p>Тип:{{ item.type }}</p>
            <p>Пароль:{{ item.password||'не введен или не требуется' }}</p>
            <ol>
                <li  v-for="mark in item.marks " :key="nanoid()">
                   {{ mark }}
                </li>
            </ol>
        </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
const {splittedItems}=useCounterStore()
import { nanoid } from 'nanoid';
</script>

<style>

</style>