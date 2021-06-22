const Faculty = require('../model/facultyModel');

exports.getOneFaculty = async(req, res, next) => {
  try {
    const Faculties = await Faculty.findById(req.params.id);
    console.log('single from update')
    res.status(200).json({
      success: "success",
      Faculties
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.getFaculty = async(req, res, next) => {
  try {
    const Faculties = await Faculty.find();
    res.status(200).json({
      success: "success",
      Faculties,
    });
  } catch (error) {
    res.json(error)
  
  }
}
exports.postFaculty = async(req, res, next) => {
  console.log('updated req.body')
  console.log(req.body);
  try {
  //   const {name,email,gender,course_code,phone_number,street_address,city,country}=req.body;
  // const faculty={
  //   id,
  //   name,
  //   email,
  //   gender,
  //   address:{
  //     street_address,
  //     city,
  //     country
  //   },
  //   course_code,
  //   phone_number
  // }
  // if(id){
  //   arr.push(newFaculty)
  //   return res.json({
  //       success: "success",
  //       arr,
  //     });
  // }else {
  //   return res.json({
  //     msg:"id field is compulsory"
  //   })
  // }
  
  
	const newFaculty = await Faculty.create({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    course_code:req.body.course_code,
    phone_number:req.body.phone_number,
    address:{
      street_address:req.body.street_address,
      city:req.body.city,
      country:req.body.country,
    }
  });
  res.json({
      status: 'success',
      newFaculty
  })
  } catch (error) {
    res.json(error)
  
  }
}
exports.deleteFaculty = async(req, res, next) => {
  try {
    const doc = await Faculty.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.send('No Document found with that Id');
    }
    // i = arr.findIndex((obj => obj.id == req.params.id));
    // arr.splice(i,1);
    res.status(204).json({
      status: 'success',
      data: 'Deleted successfully'
    });
  } catch (error) {
    res.json(error)
  
  }
}

exports.updateFaculty = async(req, res, next) => {
  console.log('updated call')
  console.log(req.body)
  try {
  const updatedDoc = await Faculty.findByIdAndUpdate(req.params.id, {
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    course_code:req.body.course_code,
    phone_number:req.body.phone_number,
    address:{
      street_address:req.body.street_address,
      city:req.body.city,
      country:req.body.country,
    }
  }, {
      new: true});
    if (!updatedDoc) {
      return res.send('No Document found with that Id');
    }

    // i = arr.findIndex((obj => obj.id == req.params.id));
    // const result=arr[i];

    // var merge={...result,...req.body};
    // arr[i]=merge;

    res.status(200).json({
      status: 'success',
      msg:'successfully updated'
    });
  } catch (error) {
    res.json(error);
  }
}