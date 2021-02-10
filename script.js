// Create elements if needed
// let input = document.createElement("input");

// // Appending elements to body if needed
// document.body.appendChild(input);

// Create object array
const animals = [{
    animal: "tupp",
    legs: 2
}, {
    animal: "hund",
    legs: 4
}, {
    animal: "gris",
    legs: 4
}, {
    animal: "hund",
    legs: 4
}];

countLegs(8,2,4,2)

// If I want to use an input
// input.addEventListener("keydown", function (e) {
//     if (e.key == 'Enter') {
//         let userInput = input.value;

//         countLegs();
//     }
// })


function countLegs(tupp, hund, gris, katt) {
    let sum = (animals[0].legs)*tupp + (animals[1].legs)*hund + (animals[2].legs)*gris + (animals[3].legs)*katt;
    console.log(sum);
    }

    // Adds together numbers in array
    // let sum = legs.reduce((partial_sum, a) => partial_sum + a, 0)
    // console.log(sum);
