(function() {
  function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    const week = ["weekend","weekday","weekday","weekday","weekday","weekday","weekend"];
    return week[day];
  }
  console.log(isWeekend());
})();
