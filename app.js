console.log("Hello World!");

const person = {
  name: "Aishah",
  age: 26,
  favouriteColour: "Pink",
};
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.favouriteColour);

person.favouriteFood = "Pho";
console.log(person.favouriteFood);

const car = {
  make: "Ford",
  model: "Mustang",
  colour: "Cherry red",
};
const carDetails = `My favourite car is a ${car.make} ${car.model}, in the colour ${car.colour}`;
console.log(carDetails);

const book = {
  title: "The secret garden",
  author: "Frances Hodgson Burnett",
  pages: 368,
};
const advert = `${book.title} is a book written by the author ${book.author}, and has ${book.pages} pages`;
console.log(advert);

//Workshop

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Aishah",
    age: 26,
    favouriteColour: "Pink",
  },
  tags: ["coding", "javascript", "html", "css", "crocheting"],
  content: "This is my blog post about all my different types of hobbis.",
};

console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

console.log(`Tags for post "${blogPost.title}":`);
for (let tag of blogPost.tags) {
  console.log(tag);
}
