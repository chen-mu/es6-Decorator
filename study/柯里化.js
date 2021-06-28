// 将add(2)(4)(5)输出为add(2,4,5)

function add() {
	const _args = Array.from(arguments)

	// 将函数参数保存起来
	function _adder() {
		_args.push(...arguments)
		return _adder
	}
	// 实现函数的功能
	_adder.demo = function () {
		console.log(_args)
		return _args.reduce((ac, cu) => {
			return ac + cu
		}, 0)
	}
	return _adder
}

console.log(add(1, 2, 3, 4)(5, 6).demo())
