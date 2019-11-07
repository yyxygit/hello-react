export const LOADING = 'loading';
export const SUCCESS = 'success';
export const FAILURE = 'failure';

/**
 * 定义 对应 的 三种 异步 操作 状态：
 * 读者 可能 觉得 actionTypes. js 和 status. js 内容 重复 了，
 * 因为 三个 action 类型 和 三个 状态 是一 一 对应 的。
 * 虽然 看起来 代码 重复， 但是 从 语义上 说，
 * action 类型 只能 用于 action 对象 中，
 * 状态 则是 用来 表示 视图。
 * 为了 语义 清晰， 还是 把 两者 分开 定义。

 */