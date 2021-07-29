export const state = () => ({
  completedSteps: [],
  activeStep: 1,
  steps: [
    { id: 1, name: 'Step 1', detail: 'Personal Information', href: '#', status: 'current', visible: true},
    { id: 2, name: 'Step 2', detail: 'Tickets & Times', href: '#', status: '', visible: true},
    { id: 3, name: 'Step 3', detail: 'Payment', href: '#', status: '', visible: true},
    { id: 4, name: 'Confirmation', detail: '', href: '#', status: '', visible: false},
  ],
  timeslots: [
    {
      id: 1,
      available: true,
      start: new Date("07/01/21 00:00:00"),
      end: new Date("07/01/21 00:30:00")
    },
    {
      id: 2,
      available: false,
      start: new Date("07/01/21 01:00:00"),
      end: new Date("07/01/21 01:30:00")
    },
    {
      id: 3,
      available: true,
      start: new Date("07/02/21 02:00:00"),
      end: new Date("07/02/21 02:30:00")
    },
    {
      id: 4,
      available: false,
      start: new Date("07/02/21 03:00:00"),
      end: new Date("07/02/21 03:30:00")
    },
    {
      id: 5,
      available: true,
      start: new Date("07/02/21 04:00:00"),
      end: new Date("07/02/21 04:30:00")
    },
    {
      id: 6,
      available: true,
      start: new Date("07/03/21 05:00:00"),
      end: new Date("07/03/21 05:30:00")
    },
    {
      id: 7,
      available: true,
      start: new Date("07/03/21 06:00:00"),
      end: new Date("07/01/23 06:30:00")
    },
    {
      id: 8,
      available: false,
      start: new Date("07/04/21 07:00:00"),
      end: new Date("07/04/21 07:30:00")
    },
    {
      id: 9,
      available: true,
      start: new Date("07/05/21 08:00:00"),
      end: new Date("07/01/21 08:30:00")
    },
    {
      id: 10,
      available: true,
      start: new Date("07/05/21 09:00:00"),
      end: new Date("07/05/21 09:30:00")
    },
  ],
  activeDate: new Date(),
  selectedTickets: []
});

export const mutations = {
  AddTimeslots(state, timeslots) {
    state.availableDates = timeslots && timeslots
  },
  activeDate(state, activeDate) {
    state.activeDate = activeDate
  },
  activeStep(state, activeStepId) {
    state.activeStep = activeStepId
    console.log('active step', activeStepId);
    const lastStep = state.steps.find(step => step.id === activeStepId - 1);
    const activeStep = state.steps.find(step => step.id === activeStepId);
    lastStep.status = "complete"
    activeStep.status = "current"
    // const nextStep = state.steps.find(step => step.id === activeStep);
    // nextStep.status = "current"
    // state.steps = [
    //   ...state.steps,
    //   lastStep
    // ]
  },
completedSteps (state, stepId) {
    state.completedSteps.push(stepId)

  }
}

export const actions = {
  setComplete(context, completedStep) {
    context.commit('activeStep', completedStep + 1)
    context.commit('completedSteps', completedStep)
  },
  setActiveDate (context, activeDate) {
    context.commit('activeDate', activeDate)
    },
  // fetchDates ({ commit }, context) {
  //   return this.$axios.$get(this.$api.employees.roles).then((response) => {
  //     commit('addRoles', response)
  //     commit('setError', false)
  //   }).catch((error) => {
  //     context.store.commit('error/setError', error)
  //     commit('setError', error)
  //     context.error({ message: error.message })
  //   })
  // }
}
