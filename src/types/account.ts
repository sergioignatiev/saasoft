export type Type= 'local'|'ldap'


export type Account={
    id:string,
    marks:string,
  type:Type,
  login:string,
  password:string|null,
 
}
export type AccountMarks=Omit<Account,'marks'>&{
marks:string[]
}