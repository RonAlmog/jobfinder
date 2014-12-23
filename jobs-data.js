var mongoose = require("mongoose");
var Promise = require("bluebird");

var Job = mongoose.model('Job');

var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

var createJob = Promise.promisify(Job.create, Job);

var jobs = [{title: 'Cooky', description: 'You will roeast chickens all day long.'},
            {title: 'Programmer', description: 'You will chase bugs all night long'},
            {title: 'Teacher', description: 'You will chase children all day long'},
            {title: 'Painter', description: 'You will play with colors and brushes for living!'} ];
            
exports.seedJobs = function(){
    return findJobs({}).then(function(collection){
       if(collection.length===0){
                return Promise.map(jobs, function(job){
                    return createJob(job);
                })
            }
        })
}

