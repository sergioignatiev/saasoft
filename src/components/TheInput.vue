<template>
  <div class="flex flex-col sm:flex-row gap-2 p-3 border border-gray-300 rounded-lg shadow-md items-center">
    <input
      placeholder="МЕТКИ"
      maxlength="50"
      type="text"
      v-model="localMarks"
      @blur="onBlurMarks(localMarks)"
      :class="[
        'flex-1 min-w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150',
        { 'red-border': redborderMarks }
      ]"
    />

    <select 
      name="type" 
      id="type" 
      v-model="localType"
      class="w-full sm:w-auto px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
    >
      <option value="local">Локальная</option>
      <option value="ldap">LDAP</option>
    </select>

    <input
      @blur="onBlurLogin(localLogin)"
      type="text"
      maxlength="100"
      placeholder="Значение"
      :class="[
        'flex-1 min-w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150',
        { 'red-border': redborderLogin }
      ]"
      v-model="localLogin"
    />

    <input
      type="password"
      maxlength="100"
      placeholder="Пароль"
     
      v-model="localPassword"
      @blur="onBlurPassword(localPassword)"
      :class="[
        'flex-1 min-w-40 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150',
        { 'red-border': redborderPassword,'invisible':localType!=='local'}
      ]"
    />

    <button 
      @click="deleteItem"
      class="w-full sm:w-auto px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-150 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Удалить
    </button>
  </div>
</template>

<script lang="ts" setup>
import { type Account, type Type } from '@/types/account'
import { computed, ref } from 'vue'

const props = defineProps<Account>()
const emit = defineEmits<{
  (event: 'update:marks', value: string): void
  (event: 'update:type', value: Type): void
  (event: 'update:login', value: string): void
  (event: 'update:password', value: string | null): void
  (event: 'delete', id: string): void
}>()

const redborderLogin = ref(false)
const redborderPassword = ref(false)
const redborderMarks = ref(false)


const localMarks = computed({
  get: () => props.marks,
  set: (x) => emit('update:marks', x),
})

const localType = computed({
  get: () => props.type,
  set: (x: Type) => {
    emit('update:type', x)
    if (x === 'ldap') emit('update:password', null)
  },
})

const localLogin = computed({
  get: () => props.login,
  set: (x) => emit('update:login', x),
})

const localPassword = computed({
  get: () => props.password,
  set: (x: string | null) => {
    if (props.type === 'ldap') emit('update:password', null)
    else emit('update:password', x)
  },
})

function deleteItem() {
  emit('delete', props.id)
}

function onBlurLogin(value: string) {
  redborderLogin.value = value.trim().length === 0
}

function onBlurMarks(value: string) {
  redborderMarks.value = value.trim().length === 0
}

function onBlurPassword(value: string | null) {
  redborderPassword.value = props.type === 'local' && (!value || value.trim().length === 0)
}

// Убрана функция onBlurType, как обсуждалось ранее, поскольку она не нужна для `<select>` с заданными опциями.

</script>

<style scoped>
/* Этот класс оставлен, как вы просили, для сохранения логики */
.red-border {
  border: 2px solid red;
}
</style>