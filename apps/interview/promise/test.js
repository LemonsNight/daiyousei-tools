class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(fn) {
    // 当前状态promise状态
    this.PromiseState = myPromise.PENDING
    this.PromiseResult = null
    try {
      // bind() 方法创建一个新函数，
      // 当调用该新函数时，它会调用原始函数并将其 this 关键字设置为给定的值
      // 同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。
      fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  // 是否为等待状态
  isPending() {
    return this.PromiseState === myPromise.PENDING
  }
  // 成功
  resolve(result) {
    if (this.isPending()) {
      this.PromiseState = myPromise.FULFILLED // 设置状态为成功
      this.PromiseResult = result
    }
  }
  // 失败
  reject(result) {
    if (this.isPending()) {
      this.PromiseState = myPromise.REJECTED // 设置状态为失败
      this.PromiseResult = result
    }
  }
  then() {}
}
