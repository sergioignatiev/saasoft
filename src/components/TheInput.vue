<template>
  <div>
    <input @blur="onBlur(props.marks)"пш placeholder="МЕТКИ" maxlength="50" type="text" v-model="localMarks">
    <select name="type" id="type" v-model="localType">
        <option value="local">Локальная</option>
        <option value="ldap">LDAP</option>
    </select>
    <input type="text" maxlength="100" placeholder="Значение" v-model="localLogin">
    <input type="password" maxlength="100" placeholder="Пароль" v-show="localType=='local'" v-model="localPassword">
  <button @click="deleteItem">Удалить</button>
  </div>
</template>

<script lang="ts" setup>
import { type Account,type Type } from '@/types/account';
import { computed } from 'vue';
const props=defineProps<Account>()
const emit=defineEmits<{(event:"update:marks",value:string):void,
(event:"update:type",value:Type):void,
(event:"update:login",value:string):void,
(event:"update:password",value:string|null):void,
(event:"delete",id:string):void
}>()
const localMarks=computed({
    get:()=>props.marks,
    set:x=>emit('update:marks',x)
})
const localType=computed({
    get:()=>props.type,
    set:(x:Type)=>{emit('update:type',x)
        if (x === 'ldap') {
    emit('update:password', null)
        }
    }
})
const localLogin=computed({
   get:()=>props.login,
   set:(x)=>emit('update:login',x)
   
})
const localPassword=computed({
    get:()=>props.password,
    set:(x:string|null)=>{
        if(props.type=='ldap'){
            emit('update:password',null)
        }else{
            emit('update:password',x)
        }
    }
})

function deleteItem(){
    emit('delete',props.id)
}

function onBlur(x:any){
   if(x===''){
    alert(' Заполни все, сука')
   }
}
</script>

<style>

</style>