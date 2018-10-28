export default {
	changeCityName : function (state, city) {
		state.city = city
		console.log(state.city)
		localStorage.city = city
	}
}