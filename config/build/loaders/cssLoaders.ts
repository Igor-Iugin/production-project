import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function CssLoader(isDev: boolean) {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.m./i,
						localIdentName: isDev
							? '[name]__[local]--[hash:base64:5]'
							: '[hash:base64:5]'
					}
				}
			},
			'sass-loader'
		]
	}
}
