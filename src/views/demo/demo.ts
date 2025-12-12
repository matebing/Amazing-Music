//一、函数调用签名
interface IFnCall {
  //签名里面可以写函数有哪些参数，有什么返回值
  //注意：在签名里面，参数和返回值之间写 :
  //注意：在单独定义函数类型的时候，参数和返回值之间写 =>
  (name: string, age: number): string
}

const foo: IFnCall = function (name, age) {
  return 'hello world'
}

foo('张三', 18)

//二、函数调用签名，name参数是一个函数
interface DFnCall {
  (fn: () => string, age: number): string
}

const dee: DFnCall = function (fn, age) {
  return 'hello world'
}

dee(() => {
  return 'hello world'
}, 18)

//三、函数调用签名，加入泛型
interface EFnCall {
  //泛型，用来在函数被调用时传入类型，传入的类型T，作为fn函数的返回值类型
  <T>(fn: () => T, age: number): string
}

const cee: EFnCall = function (fn, age) {
  return 'hello world'
}

//调用cee函数时，传入一个number类型，则cee函数的第一个参数(函数)，需要返回number类型
cee<number>(() => {
  return 20
}, 18)

cee<string>(() => {
  return 'hello world'
}, 18)

//调用时不传入明确的泛型类型，ts会自动类型推导
cee(() => {
  return []
}, 18)

//四、函数调用签名，加入多种泛型
interface MFnCall<N> {
  <T>(fn: (num: N) => T, age: number): T
}

const gee: MFnCall<number> = function (fn, age) {
  //传入的number类型作为fn函数的参数类型
  //gee函数的返回值类型和fn函数的返回值类型相同
  return fn(10)
  //这里不能明确返回一个确定的类型，因为不知道fn函数返回的是什么类型
  //只能明确返回的类型和fn的返回值类型相同
  //return 'hello world'
}

//调用时不传入明确的泛型类型，ts会自动类型推导
//hello world是string类型，推导出T是string类型，进而推导出gee函数的返回值是string类型
const result = gee((count) => {
  return 'hello world'
}, 18)

export default foo
