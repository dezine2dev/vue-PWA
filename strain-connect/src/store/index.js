import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      step: 0,
      ailments: [
          "Chronic Pain",
          "Migraines",
          "Muscle Spasms",
          "Stress",
          "Vertigo",
          "Nausea"
      ],
      ailmentsLib: [
          "Chronic Pain",
          "Migraines",
          "Muscle Spasms",
          "Stress",
          "Vertigo",
          "Nausea"
      ],
      ailment: [], // List To Be Mailed
      effect: {
        high: null, // 0 - 5
        time: null, // Day - Night
        feeling: [] // List
      },
      personality: [],
      disableNext: false
    },
    mutations: {
      resetState (state){
          state.step =  0;
          state.ailment = []; // List
          state.effect = {
            high: null, // 0 - 5
            time: null, // Day - Night
            feeling: [] // List
          };
          state.personality = [];
          state.disableNext = false;
      },
      toggleNext (state){
        state.disableNext = !state.disableNext
      },
      setStep (state, n){
        state.step = n;
      },
      updateRating (state, n) {
        state.rating = n > state.rating ? n : state.rating;
      },
      addAilment (state, payload){
        state.ailment.push(payload)
      },
      removeAilment (state, payload){
        let i = state.ailment.indexOf(payload);
        state.ailment.splice(i, 1);
      },
      setHigh (state, payload) {
        state.effect.high = payload
      },
      setTime (state, payload) {
        state.effect.time = payload
      },
      addFeeling (state, payload){
        state.effect.feeling.push(payload)
      },
      removeFeeling (state, payload){
        let i = state.effect.feeling.indexOf(payload);
        state.effect.feeling.splice(i, 1);
      },
      addPersonality (state, payload){
        state.personality.push(payload)
      },
      removePersonality (state, payload){
        let i = state.personality.indexOf(payload);
        state.personality.splice(i, 1);
      }


    },
    actions: {
      // setRating (context, n) {
      //   context.commit('updateRating', n)
      // }
    }
  });
