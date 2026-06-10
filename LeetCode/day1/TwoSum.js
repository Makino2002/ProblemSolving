// num[0] + num[1] = target
// num[0] = target - num[1]
// sử dụng map để lưu lại index của các phần tử đã duyệt qua
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 8));
