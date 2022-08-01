// this - @ scope -a  bayc dinamik scope,
// inq@ paymanavorvaca vochte ira stexcman texov, ayl kanchi texov,


function foo() {
   console.log(this)
}

let that = {
   name: "Dav",
   boo: foo,
   goo: function(){
      foo();
   }
}

// console.log(that.boo());
that.goo()
