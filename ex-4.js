// Exercise #4
let getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function getJohnData() {
  try {
    const johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (error) {
    console.log(error);
  }
}
getJohnData();
