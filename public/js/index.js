
function viewStartScreen() {
  var div = $(`<div id="screenStart">`);
  var btn1 = $(`<button id="btnStartNewWorkout" class="btn btn-primary">`).text("Start New Workout");
  var btn2 = $(`<button id="btnContinueWorkout" class="btn btn-secondary">`).text("Continue Workout");
  div.append(btn1).append(btn2);

  // START NEW WORKOUT - CLICK HANDLER
  $("#btnStartNewWorkout").click(function () {
    $.post("/api/start", function (data) {

    });
  });

  // CONTINUE WORKOUT - CLICK HANDLER
  $("#btnContinueWorkout").click(function () {
    $.post("/api/continue", function (data) {

    });
  });

  $("#content").empty().append(div);
}

function clearStartScreen() {
  $("#btnStartNewWorkout").off("click");
  $("#btnContinueWorkout").off("click");
  $("#content").empty();
}

function viewWorkoutScreen(exercises) {
  var div = $(`<div id="workoutScreen">`);
  var input = $(`<input id="inputWorkout" class="form-control">`);
  var btnAdd = $(`<button id="btnAddExercise" class="btn btn-primary">`).text("Add Exercise");
  var exerciseList = $(`<ul id="exerciseList">`);

  // Add the exercises from that workout
  exercises.forEach(function (exericse) {
    var li = $("<li>").text(exericse.name);
    exerciseList.add(li);
  });

  div.append(input)
    .append(btnAdd)
    .append(exerciseList);

  $("#btnAddExercise").click(function () {
    // ADD EXERCISE
    $.post("/api/exercise", {
      name: $("#inputWorkout").val().trim()
    }, function () {
      // Process Response
    }
  });

  $("#content").empty().append(div);
}

function clearWorkoutScreen() {
  // cancel click handlers
  $("#content").empty();
}

$(document).ready(function () {
  console.log("INDEX JS");
  viewStartScreen();
});