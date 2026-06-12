var myObject = new MyNamespace.MyClass("Hello!");
var phrase = myObject.sayHello();
//MyNamespace đã được sử dụng trước khi định nghĩa MyClass, nhưng nó vẫn hoạt động vì MyNamespace đã tồn tại trong phạm vi toàn cục. Điều này cho phép chúng ta sử dụng MyNamespace để truy cập MyClass mà không gặp lỗi.

class MyNamespace {
  constructor() {}
}

MyNamespace.MyClass = class {
  constructor(message) {
    this.message = message;
  }
  sayHello() {
    return this.message;
  }
};
