let mongoose=reqiure ('mongoose');
let Schema=mongoose.Schema;
let productSchema=new Schema({
    bookingday:{type:Date,required:true,default:''},
	bokingtime:{type:String,required:true},
	people:{type:Number,required:true, min:0,max:12},
	fname:{type:String,required:true,minLength:2},
	lname:{type:String,default:''},
	email:{type:String,required:true,pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"},
	phone:{tpe:tel,pattern:'[\+]\d{3}[\(]\d{2}[\)]\d{7}'},
    country:{type:String,required:true},
    city:{type:String,default:''},
    address:{type:String,default:''},
    zip:{type:Number,required:true,minLength:5,maxLength:5},
    card_number:{type:Number,required:true,minLength:16,maxLength:16},
	card_month:{type:Number,required:true, min:0,max:12},
	card_year:{type:Number,required:true,min:2018 ,max:2025},
	card_cvc:{type:Number,required:true,minLength:3,maxLength:3}


	
});
module.exports=mongoose.model('booking', bookingSchema);