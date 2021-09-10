init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const exercise = await API.getLastWorkout();
    if (exercise) {
      location.search = "?id=" + exercise._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
