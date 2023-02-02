
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("select gender")
  const [phonenumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [address, setAddress] = useState("")
  const [dob, SetDob] = useState("")
  const [uphoto,setUPhoto] = useState("")
  const [usignature,setUSignature] = useState("")
  const [username, SetUsername] = useState("")
  const [uphotoError,setUPhotoError] = useState("")
  const [usignatureError,setUSignatureError] = useState("")
  const [addressError, setAddressError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [cpasswordError, setCpasswordError] = useState("")
  const [dobError, SetDobError] = useState("")
  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [phoneNumberError, setphoneNumberError] = useState("")
  const [genderError, setgenderError] = useState("")
  // const [emptyError, setemptyError] = useState("")

  const resetErrorDefault =()=> {
    setnameError("")
    setemailError("")
    setPasswordError("")
    setCpasswordError("")
    setgenderError("")
    SetDobError("")
    setphoneNumberError("")
    setAddressError("")
    setUPhotoError("")
    setUSignatureError("")
  }

  const validate = () => {
    // if (name === "" || email === "" || gender === "" || phonenumber === "" || password === "") {
    //   setemptyError("**All fields are Mandatory")
    //   SetUsername("")
    //   return false
    // }

    // <-- Name -->
    if(name === ""){
      setnameError("**Please fill your Name")
      SetUsername("")
      return false
    } 
    if (!name.match(/^[ A-Za-z0-9_]*$/)) {
      setnameError("**Name is not Alphanumeric")
      SetUsername("")
      return false
    }
    if(name.length <= 2 || name.length > 20){
      setnameError("**Name must be between 3 to 20 characters")
      SetUsername("")
      return false
    }
    if(!isNaN(name)){
      setnameError("**Only Digits are not allowed")
      SetUsername("")
      return false
    }

    // <--Email-->
    if(email === ""){
      setemailError("**Please fill the Email Id")
      SetUsername("")
      return false
    } 
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setemailError("**Enter correct Email. Ex:- username@gmail.com")
      SetUsername("")
      return false
    }

    // <--Password-->
    if(password === ""){
      setPasswordError("**Please Enter the Password")
      SetUsername("")
      return false
    } 
    if(password.length <= 7 || password.length > 20) {
      setPasswordError("**Password must be in between 8 to 20 letters")
      SetUsername("")
      return false
    }

    // <--Confirm Password-->
    if(cpassword === ""){
      setCpasswordError("**Please Enter the Confirm Password")
      SetUsername("")
      return false
    } 
    if(cpassword !== password) {
      setCpasswordError("**Password not matching")
      SetUsername("")
      return false
    }

    // <--Gender-->
    if(gender === ""){
      setgenderError("**Please Select the Gender")
      SetUsername("")
      return false
    }
    if(!gender.match(/male|female|other/i)){
      setgenderError("**Please Select the Gender")
      SetUsername("")
      return false
    }

    // <--DOB-->
    if(dob === ""){
      SetDobError("**Please fill your Date of Birth")
      SetUsername("")
      return false
    }

    // <--Mobile Number-->
    if(phonenumber === ""){
      setphoneNumberError("**Please fill Mobile No.")
      SetUsername("")
      return false
    }
    if(!phonenumber.match(/^[0-9]+$/)){
      setphoneNumberError("Mobile number must contain only numbers")
      SetUsername("")
      return false
    }
    // if(isNaN(phonenumber)) {
    //   setphoneNumberError("Mobile number must contain only numbers")
    //   SetUsername("")
    //   return false
    // }
    if(phonenumber.length !== 10) {
      setphoneNumberError("Mobile Number must be of 10 digits")
      SetUsername("")
      return false
    }

    // <--Address-->
    if(address === ""){
      setAddressError("**Please fill your Address")
      SetUsername("")
      return false
    }
  
    // <--Upload Photo-->
    if(uphoto === ""){
      setUPhotoError("**Please Upload your Photo")
      SetUsername("")
      return false
    }
    if(!uphoto.match(/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$/)) {
      setUPhotoError("**Uploaded file must be in .png/.jpg/.gif format and No Special character in file name.")
      SetUsername("")
      return false
    }

    // <--Upload Signature-->
    if(usignature === ""){
      setUSignatureError("**Please Upload your Signature")
      SetUsername("")
      return false
    }
    if(!usignature.match(/([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$/)) {
      setUSignatureError("**Uploaded file must be in .png/.jpg/.gif format and No Special character in file name.")
      SetUsername("")
      return false
    }
    

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    resetErrorDefault()
    const isValid = validate()
    if(isValid) {
      setName("")
      setEmail("")
      setPassword("")
      setCpassword("")
      setGender("")
      SetDob("")
      setPhoneNumber("")
      setAddress("")
      setUPhoto("")
      setUSignature("")
      resetErrorDefault()
    }
    SetUsername(email.substr(0,email.indexOf("@")))
  }
  return (
    <div className="container">
      <div className='p-3 mb-2 bg-info-subtle text-emphasis-info'>
      <h1 className='text-center fw-bold'>Registration Form</h1>
      </div>
      
      <div className='col-lg-8 m-auto d-block border border-dark-subtle'>
      <form onSubmit={handleSubmit} className="bg-light">
        <div className='form-group'>
          <label htmlFor="">Name:</label>
          <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} autoComplete='off'/>
          <span className="text-danger fw-bold">{nameError}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="">Email:</label>
          <input type="text" className='form-control' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='off'/>
          <span className="text-danger fw-bold">{emailError}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="">Password:</label>
        <input type="Password" className='form-control' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="off"/>
        <span className="text-danger fw-bold">{passwordError}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="">Confirm Password:</label>
        <input type="Password" className='form-control' placeholder='Confirm Password' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} autoComplete="off"/>
        <span className="text-danger fw-bold">{cpasswordError}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="">Gender:</label>
          <select className='form-control' name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} autoComplete="off">
          <option value="select gender">Open this select menu</option>
          <option value="male" >Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span className="text-danger fw-bold">{genderError}</span>
        </div>
        <div>
          <label htmlFor="">DOB:</label>
          <input className='form-control' type="date" value={dob} onChange={(e)=>{SetDob(e.target.value)}} autoComplete="off"/>
          <span className="text-danger fw-bold">{dobError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Mobile Number:</label>
        <input type="text" className='form-control' placeholder='Phone Number' value={phonenumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} autoComplete="off"/>
        <span className="text-danger fw-bold">{phoneNumberError}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="">Address:</label>
          <textarea  className='form-control' value={address} rows="2" onChange={(e)=>{setAddress(e.target.value)}} autoComplete="off"></textarea>
          <span className="text-danger fw-bold">{addressError}</span>
        </div> 
        <div className='form-group'>
          <label htmlFor="">Upload Photo:</label>
          <input type="file" value={uphoto} className='form-control' onChange={(e)=>{setUPhoto(e.target.value)}} autoComplete="off"/>
          <span className="text-danger fw-bold">{uphotoError}</span>
        </div>
        <div className='form-group'>
          <label htmlFor="">Upload Signature:</label>
          <input type="file" value={usignature} className='form-control' onChange={(e)=>{setUSignature(e.target.value)}} autoComplete="off"/>
          <span className="text-danger fw-bold">{usignatureError}</span>
        </div>
        {/* <span className="text-danger fw-bold">{emptyError}</span> */}

        <br />
        <div className='d-grid gap-2 col-6 mx-auto'>
          <button type='submit' value="Submit" className='btn btn-success'>Submit</button>
        <button type='reset' value="reset" className='btn btn-danger'>Clear</button>
        </div>
      </form>
      </div>
      <div>
        <h2>{username ? "Hello" + username : ""}</h2>
      </div>
    </div>
  );
}

export default App;
