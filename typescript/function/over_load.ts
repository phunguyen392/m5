function getInfo(name: string): void;
function getInfo(age: number): void;
function getInfo(nameOrAge: string | number): void {
  if (typeof nameOrAge === "string") {
    console.log(`Name: ${nameOrAge}`);
  } else {
    console.log(`Age: ${nameOrAge}`);
  }
}
console.log("loan",20);
console.log("lan");
console.log(30);

