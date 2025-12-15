#!/usr/bin/env node

const username = process.argv[2];

if (!username)
{
     console.log("please enter a username");
     process.exit(1);
}

async function fetchData(username)
{
    const endpoint = `https://api.github.com/users/${username}/events`;

    try 
    {
        const response = await fetch(endpoint);
        if (!response.ok){
            throw new Error(`Error status ${response.status}`)
        }
        const result = await response.json();
        return (result);
    }
    catch (error) 
    {
        console.error(error.message)
    }
}

function processData(arr)
{
    for (const element of arr)
    {
        if (element.type == "PushEvent")
            processPush(arr);
        if (element.type == "CreateEvent")
            processCreate(arr);
    }


}

async function main() 
{
    const res = await fetchData(username);
    console.log(res);
}

main();