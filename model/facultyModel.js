const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
	name: {
		type: String,
    default:""
	},
	email: {
		type: String,
    default:""

	},
  gender:{
    type:String,
    default:""

  },
  address:{
    street_address:{
      type:String,
      default:""

    },
    city:{
      type:String,
      default:""

    },
    country:{
    type:String,
    default:""

    }
  },
  course_code:{
    type:String,
    default:""

  },
  phone_number:{
    type:[String],
    default:['']
  },

})

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;