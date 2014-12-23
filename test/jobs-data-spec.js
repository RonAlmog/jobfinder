var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require('../models/Job');
var Promise = require("bluebird");
var jobsData = require("../jobs-data.js");


function resetJobs(){
    return new Promise(function (resolve, reject){
        mongoose.connection.collections['jobs'].drop(resolve, reject);    
    });
}


var constring = 'mongodb://jobfinder99user:goodforme@ds029051.mongolab.com:29051/jobfinder99';
//var constring = 'mongodb://localhost/jobfinder';


describe("get jobs", function(){
    
    var jobs;
    
    before(function(done){
        jobsData.connectDB(constring)
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs) // findJobs({}) in this case we are passing empty to find all
            .then(function(collection){
                jobs=collection;
                done();
            });
        
    })
    
    it("shoould never be empty since jobs are seeded", function(){
        expect(jobs.length).to.be.at.least(1);
    });
    
    it("shoule have a job with a title", function(){
        expect(jobs[0].title).to.not.be.empty;
    });
    
    it("shoule have a job with a description", function(){
        //console.log(jobs[0]);
        expect(jobs[0].description).to.not.be.empty;
    });
    
});
