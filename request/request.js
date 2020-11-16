const BASE = "http://124.70.71.78"

const requestApi = ({methods, url, params={}}) => {
	const data = {...params}
	return new Promise((reslove, reject) => {
		uni.request({
			method: methods ? methods : 'GET',
			url: `${BASE}${url}`,
			data,
			success: (res) => {
				let data = res.data
				data.code === 1 ? reslove(data) : reject(data.message)
			}
		})
	})
}


export default requestApi