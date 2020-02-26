export interface IField<T = string> {
    id      :string;
    label   :string;
    type    :string;
    value   :T;
}

export  interface IGroupFildes {
    [key:string] : IField
}

export  interface IArrayFildes  extends Array<IField>{

}
let a: IArrayFildes = [{id:'1',label:'',type:'',value:''}]
let b : IGroupFildes = {
    name : {id:'1',label:'',type:'',value:''},
    aa: {id:'1',label:'',type:'',value:''}
};
