var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
    Job.find({}).exec(function(error, collection){
       if(collection.length===0){
           Job.create({title: 'Cook', description: 'You will roeast chickens all day long.'});
           Job.create({title: 'Programmer', description: 'You will chase bugs all night long'});
           Job.create({title: 'Teacher', description: 'You will chase children all day long'});
           Job.create({title: 'Painter', description: 'You will play with colors and brushes for living!'});
       }
       if(error){
           console.log('Error', error);
       }
        
    });
}