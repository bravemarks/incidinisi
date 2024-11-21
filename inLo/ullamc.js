// Assuming 'datum' is an object that may or may not have a 'type' property
const datum = { type: 'exampleType' }; // Replace with the actual object

// Create the type string
const type = `${(datum.type || '') + ' legend'}`.trim();

console.log(type); // Output: "exampleType legend" if datum.type is defined
                   // Output: "legend" if datum.type is undefined or an empty string
