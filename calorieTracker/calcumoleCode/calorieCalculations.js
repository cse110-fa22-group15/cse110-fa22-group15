window.addEventListener('DOMContentLoaded', init);

const LBS_TO_CALS = 300;
const FEMALE_AVG_DAILY_CALS = 2000;
const DAYS_IN_WEEK = 7;
const FEMALE_TO_MALE = 500;

function getFoodFromStorage() {
    var breakfastDiary = JSON.parse(window.localStorage.getItem('breakfastDiary'));
    var lunchDiary = JSON.parse(window.localStorage.getItem('lunchDiary'));
    var dinnerDiary = JSON.parse(window.localStorage.getItem('dinnerDiary'));

    if (breakfastDiary == null) {
        breakfastDiary = [];
    }
    if (lunchDiary == null) {
        lunchDiary = [];
    }
    if (dinnerDiary == null) {
        dinnerDiary = []
    }
    return [breakfastDiary, lunchDiary, dinnerDiary];
}

function addUpDailyCals() {
    // Adds up the calories from each entry 
    var breakfastDiary = getFoodFromStorage()[0];
    var breakfastCals = 0;
        for (var i = 0; i < breakfastDiary.length; i++) {
           breakfastCals += parseInt(breakfastDiary[i].calories);
        }

    var lunchDiary = getFoodFromStorage()[1];
    var lunchCals = 0;
        for (var i = 0; i < lunchDiary.length; i++) {
            lunchCals += parseInt(lunchDiary[i].calories);
        }

    var dinnerDiary = getFoodFromStorage()[2];
    var dinnerCals = 0;
        for (var i = 0; i < dinnerDiary.length; i++) {
            dinnerCals += parseInt(dinnerDiary[i].calories);
        }

    var dailyCals = breakfastCals + lunchCals + dinnerCals;
    localStorage.setItem("dailyCals", dailyCals);
}

function calculateDailyGoal() {
    var dailyGoal = JSON.parse(localStorage.getItem("dailyGoal"));
    var sex = localStorage.getItem("sex");
    var currentWeight = JSON.parse(localStorage.getItem("currentWeight"));
    var goalWeight = JSON.parse(localStorage.getItem("goalWeight"));
    if (currentWeight > goalWeight) {
        dailyGoal = Math.round(FEMALE_AVG_DAILY_CALS - (((currentWeight - goalWeight) * LBS_TO_CALS) / DAYS_IN_WEEK));
    } else if (currentWeight < goalWeight) {
        dailyGoal = Math.round(FEMALE_AVG_DAILY_CALS + (((currentWeight - goalWeight) * LBS_TO_CALS) / DAYS_IN_WEEK));
    } else {
        dailyGoal = FEMALE_AVG_DAILY_CALS;
    }

    if (sex == "Male") {
        dailyGoal += FEMALE_TO_MALE;
    }
    localStorage.setItem("dailyGoal", dailyGoal);
}

function init() {
    addUpDailyCals();
    calculateDailyGoal();
} 