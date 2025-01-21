import React, { useState } from "react";
import styles from "./styles/registrationForm.module.css";
import registration from "../assets/registration/registration.png";
import phone from "../assets/icons/reg/phone.png";
import sms from "../assets/icons/reg/sms.png";
import user from "../assets/icons/reg/user.png";
import whatsapp from "../assets/icons/reg/whatsapp.png";
import eye from "../assets/icons/reg/eye.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    contactNo: "",
    whatsappNo: "",
    email: "",
    state: "",
    referral: "",
    password: "",
    confirmPassword: "",
  });

  const handlePasswordMouseDown = () => setPasswordVisible(true);
  const handlePasswordMouseUp = () => setPasswordVisible(false);

  const handleConfirmPasswordMouseDown = () => setConfirmPasswordVisible(true);
  const handleConfirmPasswordMouseUp = () => setConfirmPasswordVisible(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!isAgreed) { 
      toast.error("You must agree to the Terms and Conditions");
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await fetch("http://localhost:8080/user/saveUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      console.log("Data:", dataToSend);
      const data = await response.json();

      if (response.ok) {
        toast.success("User registered successfully");
      } else {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.error("Failed to register user");
        }
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("An error occurred while registering");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={registration} alt="" className={styles.image} />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formHead}>
            <h1>Sign up</h1>
            <p>Fill in your credentials and click on the Sign up button</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.formBody}>
            <div className={styles.formRow}>
              <div className={styles.fname}>
                <p>First Name</p>
                <div className={styles.inputIconF}>
                  <img src={user} className={styles.fIcon} />
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.lname}>
                <p>Last Name</p>
                <div className={styles.inputIconF}>
                  <img src={user} className={styles.fIcon} />
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>Contact No</p>
              <div className={styles.inputIcon}>
                <img src={phone} className={styles.fIcon} />
                <input
                  type="Number"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>WhatsApp No</p>
              <div className={styles.inputIcon}>
                <img src={whatsapp} className={styles.fIcon} />
                <input
                  type="number"
                  name="whatsappNo"
                  value={formData.whatsappNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>Email Address</p>
              <div className={styles.inputIcon}>
                <img src={sms} className={styles.fIcon} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>State</p>
              <div className={styles.inputIcon}>
                <img src={sms} className={styles.fIcon} />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>Referral Code</p>
              <div className={styles.inputIcon}>
                <input
                  type="text"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>Password</p>
              <div className={styles.inputIcon}>
                <img
                  src={eye}
                  className={styles.fIcon}
                  onMouseDown={handlePasswordMouseDown}
                  onMouseUp={handlePasswordMouseUp}
                  onMouseLeave={handlePasswordMouseUp}
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow2}>
              <p>Confirm Password</p>
              <div className={styles.inputIcon}>
                <img
                  src={eye}
                  className={styles.fIcon}
                  onMouseDown={handleConfirmPasswordMouseDown}
                  onMouseUp={handleConfirmPasswordMouseUp}
                  onMouseLeave={handleConfirmPasswordMouseUp}
                />
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="terms"
                checked={isAgreed}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                I agree to the <span>Terms and Conditions</span> and{" "}
                <span>Privacy Policy</span>.
              </label>
            </div>
            <div className={styles.buttons}>
              <button type="submit" className={styles.registerButton}>
                Register
              </button>
              <button type="button" className={styles.loginButton}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default Registration;
