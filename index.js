#!/usr/bin/env node

const username = process.argv[2];

if (!username)
{
     console.log("please enter a username");
     return ;
}

async function fetchData(username)
{
    const endpoint = `https://api.github.com/users/${username}/events`;

    try 
    {
        const response = fetch(endpoint);
        if (!response.ok){
            throw new Error(`Error status ${response.status}`)
        }
        const result = await response.json();
        console.log(result);
    }
    catch (error) 
    {
        console.error(error.message)
    }
}
fetchData(username);