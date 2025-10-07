import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { type Account } from '@/types/account'

export const useCounterStore = defineStore('counter', () => {
const myInfo=ref([{name:"Sergio"}])


const items=ref<Account[]>([])

function pushToItems(){
items.value.push(
{id:nanoid(),marks:'',type:'local',login:'',password:null}
)
}





const splittedItems=computed(()=>{
    return items.value.map(
        item=>{
            return {
                ...item,
                marks:item.marks.split(';')
            }
        }
    )})
function deleteItem(idToDelete: string) {
    
    items.value = items.value.filter(item => item.id !== idToDelete)
}

  return { myInfo,splittedItems,pushToItems,items,deleteItem }
})
