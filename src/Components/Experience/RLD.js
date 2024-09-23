import React, { Component } from 'react';
import { useEffect } from 'react';


const RLD = () => {
    useEffect(() => {
        document.title = "RLDatix - Sitansh Mehta";
    }, []);

    return (
        <div>
            Coming soon!
        </div>
    )
}

export default RLD;

//Talk about lessons learned
//How to work in large codebases
//How to network outside of your team
//Distributed Systems -- gRPC, load balancing
//Git, Making PRs