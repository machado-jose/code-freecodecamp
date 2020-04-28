function pairwise(arr, arg) {
  if (!arr.length) return 0;

  results = {};

  arr.forEach((value, index)=>{
  	if(!Object.keys(results).find(element => parseInt(element) == index) && index < arr.length - 1)
  	{
  		for(let j = index + 1; j < arr.length; j++)
  		{
  			if(value + arr[j] === arg && !Object.keys(results).find(element => parseInt(element) == j))
  			{
  				results[index] = value;
  				results[j] = arr[j];
          break;
  			}
  		}
  	}

  });

  return Object.keys(results).reduce((acc, value)=> parseInt(acc) + parseInt(value));
  
}

res = pairwise([1, 1, 1], 2);
console.log(res);