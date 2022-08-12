//object freeze saracnum e object, chi toxnum popoxutyun anel


const company = {
   name: "ABC LLC",
   id: 1234,
   CEO: {
      name: "John",
      surName: "Smith",
   }
}

Object.freeze(company);

company.id = 1111;
company.CEO.name = "Jane";

console.log(company.id, company.CEO.name)

//output 1243, "jane"
//ays depqum propertiner@ chenq karox popoxel , bayc objecti meji metchod@ karox enq poxel..