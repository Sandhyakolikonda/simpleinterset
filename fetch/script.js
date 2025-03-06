fetch("https://dummyjson.com/quotes/random")
.then(function (res)
{
    console.log(res);
    return res.json()
})
.then(function (data)
{
    console.log(data); 
    document.getElementById('quote').textContent = data.quote;
    document.getElementById('author').textContent= data.author;
    document.getElementById('id').textContent=data.id;
})
.catch(function (err) 
{ console.log(err) })

  
 




 

    