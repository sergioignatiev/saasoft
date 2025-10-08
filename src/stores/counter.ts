import { ref, computed,watch } from 'vue'
import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { type Account,type AccountMarks } from '@/types/account'

export const useCounterStore = defineStore('counter', () => {
const myInfo=ref([{name:"Sergio"}])

 let initialItems: Account[] = []
  try {
    const raw = localStorage.getItem('items')
    if (raw) {
      initialItems = JSON.parse(raw)
    }
  } catch (e) {
    console.warn('Invalid Items', e)
  }

  const items = ref<Account[]>(initialItems)

  
  watch(
    items,
    (val) => {
      localStorage.setItem('items', JSON.stringify(val))
    },
    { deep: true }
  )





function pushToItems(){
items.value.push(
{id:nanoid(),marks:'',type:'local',login:'',password:null}
)
}





const splittedItems=computed<AccountMarks[]>(()=>{
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
