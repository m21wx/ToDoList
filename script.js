
	let getLocal = localStorage.getItem('tableName') 
		let arr = JSON.parse(getLocal) || [];

		let tableTbody = document.querySelector('table tbody');
		
		function addTr(){
			tableTbody.innerHTML ='';
				for(let i = 0 ; i < arr.length; i++){
	
			let tr = `
							<tr>
								<td> ${arr[i].name} </td>
								<td> ${arr[i].dagre}  </td>
								<td> $ ${arr[i].parse} </td>
								<td> <span class='listIcons'> 
								<i class="fa-solid fa-ellipsis-vertical"></i> 
								</span>
								<ul class='ul'>
									<li> <i class="fa-solid fa-pen pen"></i> </li>
									<li> <i class="fa-solid fa-trash trash"></i> </li>
								
								</ul>
								
								</td>
								
							</tr>
						
							
						
			`;
			tableTbody.innerHTML += tr;
			}

		}
	addTr()
	let formTabel= document.querySelector('form'),
	     submitForm = document.querySelector('.btn input'),
	     nameTitle = document.querySelector('.nameTitle'),
	     selectTitle = document.querySelector('.selectTitle')
	     n1 = document.querySelector('.n1'),
	     n2 = document.querySelector('.n2'),
	     n3 = document.querySelector('.n3'),
	     n4 = document.querySelector('.n4');
		 
		 
		let ss = false;
		let dd = 0;

	formTabel.addEventListener('submit',(e)=>{
			e.preventDefault()
		
			let p = (++n1.value )+ (++n2.value )+ (++n3.value);
				n4.value = p;

				let n = nameTitle.value;
				let d= selectTitle.value;
			if(ss == false && nameTitle.value !='' ){
				console.log(nameTitle.value !='')
				let object={
					name:n,
					dagre:d,
					parse:p - 3,
				}
				nameTitle.value ='';
				selectTitle.value ='';
				n1.value='';
				n2.value='';
				n3.value='';
				arr.push(object);
				setLocal();
				addTr()
				
			}else if(ss == true && nameTitle.value !=''){
				arr[dd].name = n;
				arr[dd].dagre =d;
				arr[dd].parse = p - 3;
				setLocal();
				addTr()
				
				ss = false;
			}
		
		
	
	})
	




	let listIcons = document.querySelectorAll('.listIcons');
	let ul = document.querySelectorAll('.ul');
	listIcons.forEach((e,index)=>{
		e.addEventListener('click',()=>{
			
			ul[index].classList.toggle('activeUl')	
			
		})
	})








	let ulLi = document.querySelectorAll('.ul .trash');


	ulLi.forEach((e,index)=>{
		e.style.color='red';
		e.addEventListener('click',()=>{
		
			arr.splice(index,1)	
			setLocal();
		addTr();
		

		})
	})
	
	let ulLipen = document.querySelectorAll('.ul .pen');
		ulLipen.forEach((e,index)=>{
			e.style.color='green';
			e.addEventListener('click',()=>{
				dd = index;
			   console.log(arr[dd])
			   		nameTitle.value =arr[dd].name;
					selectTitle.value =arr[dd].dagre;
					n4.value= arr[dd].parse;
					ss=true;
					setLocal();
					addTr() 
			   
			})
			
			
		
		
		})






	function setLocal(){
		let streg = JSON.stringify(arr);
		localStorage.setItem('tableName',streg)

	}








