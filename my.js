var app = new Vue({
	el:"#app",
	data:{
		items:[
			{id:12351,column:'Apple'},
			{id:215,column:'Chips'},
			{id:3235,column:'Stocks'},
			{id:4151,column:'Enterprineur'},
		],
		Shoppinglist:[
		[	{id:1251,name:'iphone 7',price:6188,count:1,valided:true},
			{id:215,name:'iPad Pro',price:5888,count:1,valided:true},			
			{id:3235,name:'MacBook',price:24342,count:1,valided:true}],
		[	{id:1151,name:'Stm32c8t6',price:2,count:1,valided:true},
			{id:152,name:'AMS1117',price:0.1,count:1,valided:true},			
			{id:31535,name:'OPA690',price:5,count:1,valided:true}],
		[	{id:115,name:'科大讯飞',price:2,count:1,valided:true},
			{id:25,name:'虹软科技',price:0.1,count:1,valided:true},			
			{id:315,name:'贵州茅台',price:5,count:1,valided:true}],
		[	{id:11,name:'Jack Ma',price:2,count:1,valided:true},
			{id:251,name:'Ploy Ma',price:0.1,count:1,valided:true},			
			{id:33,name:'Bill Gates',price:5,count:1,valided:true}],	
		],
		curCol:0,
	},
	computed:{
		totalPrice:function(){
			let total = 0;
			for(let i = 0;i<this.Shoppinglist[this.curCol].length;i++){
				var item = this.Shoppinglist[this.curCol][i];
				total += item.price*item.count*item.valided;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		},
		
		validedAll:{
			get:function(){	
				let truthyAll = this.Shoppinglist[this.curCol][0].valided;
				for(let i = 0;i<this.Shoppinglist[this.curCol].length;i++){
					var item = this.Shoppinglist[this.curCol][i];
					console.log('get'+item.valided);
					truthyAll &= this.Shoppinglist[this.curCol][i].valided;
				};
				return truthyAll;
			},
			set:function(truth){
				for(let i = 0;i<this.Shoppinglist[this.curCol].length;i++){
					this.Shoppinglist[this.curCol][i].valided = truth;
					
				};
				
			}
		},
	},
	methods:{
		handleReduce:function(id){
			if(this.Shoppinglist[this.curCol][id].count == 1) return;
			this.Shoppinglist[this.curCol][id].count--;
		},
		handleAdd:function(id){
			this.Shoppinglist[this.curCol][id].count++;
		},
		handleRemove:function(id){
			this.Shoppinglist[this.curCol].splice(id,1);
		},
		changeCol:function(id){
			this.curCol = id;
			
		},
	}
});
/*
		validedAll:function(){
			if(valiedAll)
				for(let i = 0;i<this.Shoppinglist.length;i++)
					item.valided = true;		
			else
				for(let i = 0;i<this.Shoppinglist.length;i++)
					item.valided = false;
			
		},*/