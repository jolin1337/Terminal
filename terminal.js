var J3DL=J3DL||{};

J3DL.Terminal={
	J3DL.Terminal.dir:function(o,undef){
		if( o != undef){
			return Object.keys(o);
		}
		return "[ " + Object.keys(J3DL.Terminal) + " ]";
	},
	J3DL.Terminal.print:function(str){
		return str;
	},

	J3DL:{
		Import:function(str){
			try{
				if(str == "Math"){
					J3DL.Terminal.Math = J3DL.Terminal.J3DL.Math;
					return "Imported "+str;
				}
			}
			catch(e){
				return "faild to import "+str;
			}
		},
		Math:{
			print:function(str){
				return "Math: " + str;
			},
			Import:function(sr){
				return "";
			}
		}
	}
};