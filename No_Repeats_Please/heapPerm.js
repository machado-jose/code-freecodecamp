function heapPerm(array,n){

	if(n===1){
		console.log(array);
	}else{

		for(let i = 0; i < n; i++){
			heapPerm(array,(n-1));
			if(n%2 === 0){
				let tmp = array[i];
				array[i] = array[n-1];
				array[n-1] = tmp;
			}else{
				let tmp = array[0];
				array[0] = array[n-1];
				array[n-1] = tmp;
			}
		}

	}

}

heapPerm(['a','b','c','d'],4);