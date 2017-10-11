function controller(initialState, updater) {
    let model = initialState
    function showModel() {
        updater(model, controller)
    }

    return { showModel }
}