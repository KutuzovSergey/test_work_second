import axios from 'axios'

export default {
	state: {
		todayDate: new Date(),
		showButton: true,
		flights: false,
		allRails: [
			{
				departure:'00:05',
				arrival:'08:45',
				carrier:'Аэрофлот',
				flight:'SU 1478 Airbus A320',
				on_the_way:'4 ч. 40 мин.',
				price:'11904 р.',
			},
			{
				departure:'00:05',
				arrival:'08:45',
				carrier:'Аэрофлот',
				flight:'SU 1478 Airbus A320',
				on_the_way:'4 ч. 40 мин.',
				price:'12500 р.',
			},
			{
				departure:'15:30',
				arrival:'19:30',
				carrier:'Победа',
				flight:'SU 1478 Airbus A320',
				on_the_way:'4 ч. 00 мин.',
				price:'10500 р',
			},
			{
				departure:'12:00',
				arrival:'16:20',
				carrier:'Аврора',
				flight:'SU 1478 Airbus A320',
				on_the_way:'4 ч. 20 мин.',
				price:'13700 р',
			},
			{
				departure:'20:00',
				arrival:'00:00',
				carrier:'Аврора',
				flight:'SU 1478 Airbus A320',
				on_the_way:'3 ч. 40 мин.',
				price:'12305 р',
			},
		],
	},
	mutations: {
		ALL_RAILS: (state, value) =>{
			//state.allRails = value;
			console.log(value);
		},
		SHOW_BUTTON: (state, show_button) => {
			state.showButton = show_button;
		}
	},
	getters:{
		GET_TODAY_DATE: (state) =>{
			return state.todayDate
		},
		GET_ALL_RAILS: (state) =>{
			return state.allRails
		},
		// GET_SHOW_BUTTON: (state) =>{
		// 	return state.showButton
		// }
	},
	actions: {
		SET_SHOW_BUTTON: ({ commit }, show_button) =>{
			commit('SHOW_BUTTON', show_button)
		},
		// SET_FORM_DATA: ({ commit }, form_data) =>{
		// 	commit('FORM_DATA', form_data)
		// },
		SET_ALL_RAILS: ({ commit }, form_data) =>{
			const options = {
				method: 'GET',
				url: 'https://flight-fare-search.p.rapidapi.com/flight/search',
				params: { form_data },
				headers: {
					'x-rapidapi-key': 'b3844dc06dmshc3f059c4c552d54p1db6e3jsn2d815db94989',
					'x-rapidapi-host': 'flight-fare-search.p.rapidapi.com'
				}
			};
			return axios.request(options).then(function (response) {
				commit('ALL_RAILS', response.data)
			}).catch(function (error) {
				console.error(error);
			});
		},
	},
	modules: {
	}
}
