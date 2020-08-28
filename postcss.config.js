module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-px-to-viewport': {
			unitToConvert: 'px',// 需要转换的单位，默认为"px"
			viewportWidth: 375,//设计稿的视口宽度
			unitPrecision: 5,//单位转换后保留的精度
			propList: ['*'],
			viewportUnit: 'vw',//希望使用的视口单位
			fontViewportUnit: 'vw',//字体使用的视口单位
			selectorBlackList: ['ignore'],//需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
			minPixelValue: 1,//设置最小的转换数值，如果为1的话，只有大于1的值会被转换
			mediaQuery: false,//媒体查询里的单位是否需要转换单位
			replace: true,//是否直接更换属性值，而不添加备用属性
		}
	}
}
