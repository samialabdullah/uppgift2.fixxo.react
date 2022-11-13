import React, { useState } from 'react'
import { submitData, validate } from '../assets/scripts/submit_and_validation'

const ContactFormSection = () => {
  let currentPage = "Contact Us"
  window.top.document.title = `${currentPage} || Fixxo` 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target
    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFailedSubmit(false)
    setSubmitted(false)

    setErrors(validate(e, {name, email, comments}))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {

        let json = JSON.stringify({ name, email, comments})
        
         setName('')
         setEmail('')
         setComments('')
         setErrors({})

         if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
          setSubmitted(true)
          setFailedSubmit(false)
         } else {
          setSubmitted(false)
          setFailedSubmit(true)
         }

    } else {
     setSubmitted(false)
    }
  }





  return (
    <section className="contact-form mt-5">
      <div className="container">
        
        {
          submitted ? (
          <div data-testid="success" className="alert alert-success text-center mb-5" role="alert">
            <h3>Thank you for your comments</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }
        
        {
          failedSubmit ? (
          <div className="alert alert-danger text-center mb-5" role="alert">
            <h3>Something went wrong!</h3> 
            <p>We couldn't submit your comments right now.</p>
            </div>  ) : (<></>)
        }

        
        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={name} onChange={handleChange} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors.comments ? 'error': '')} style={(comments ? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
            <div data-testid="commentsError" id="comments-error" className="errorMessage">{errors.comments}</div>
          </div>








          <div className="formBtn">
            <button type="submit" className="btn-theme">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default ContactFormSection





// import React, { useState } from 'react'
// import { submitData } from '../scripts/submitAndValidation'

// const ContactUsForm = () => {

//     const [formErrors, setFormErrors] = useState({})

//     const [contactForm, setContactForm] = useState({ name: '', email: '', comments: '' })

//     const [canSubmit, setCanSubmit] = useState(false)

//     const [failedSubmit, setFailedSubmit] = useState(false);

//     //validate on keyup only after user has tried submitting. edit handleSubmit() and handleKeyUp() to remove.
//     //set to true to validate always
//     const [hasTriedSubmitting, setHasTriedSubmitting] = useState(true)

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setContactForm({ ...contactForm, [id]: value })
//     }

//     const validate = (values) => {
//         const errors = {};
//         // eslint-disable-next-line
//         const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         const nameRegEx = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
//         if (!values.name) {
//             errors.name = "You must enter a name";
//             document.getElementById("name").classList.add("error");
//         }
//         else if (!nameRegEx.test(values.name))
//             errors.name = "You must enter a name... please contact if your real name is not accepted";
//         else
//             document.getElementById("name").classList.remove("error");
//         if (!values.email) {
//             errors.email = "You must enter an email address"
//             document.getElementById("email").classList.add("error");
//         }
//         else if (!emailRegEx.test(values.email)) {
//             errors.email = "You must enter a valid email address";
//             document.getElementById("email").classList.add("error");
//         }
//         else
//             document.getElementById("email").classList.remove("error");
//         if (!values.comments) {
//             errors.comments = "You must enter a comment"
//             document.getElementById("comments").classList.add("error");
//         }
//         else if (values.comments.length < 5) {
//             errors.comments = "You must enter a longer comment"
//             document.getElementById("comments").classList.add("error");
//         }
//         else
//             document.getElementById("comments").classList.remove("error");

//         return errors;
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setFailedSubmit(false);
//         setCanSubmit(false);
//         setHasTriedSubmitting(true);
//         setFormErrors(validate(contactForm));

//         let name = contactForm.name;
//         let email = contactForm.email;
//         let comments = contactForm.comments;

//         let json = JSON.stringify({ name, email, comments });

//         if (Object.entries(validate(contactForm)).length === 0) {
//             if (submitData("https://win22-webapi.azurewebsites.net/api/contactform", json, "POST")) {
//                 setCanSubmit(true);
//                 setFailedSubmit(false);
//                 setContactForm({ name: '', email: '', comments: '' });
//             } else {
//                 setCanSubmit(false);
//                 setFailedSubmit(true);
//             };
//         } else { setCanSubmit(false) }
//     }

//     const handleKeyUp = () => {
//         if (hasTriedSubmitting === true)
//             setFormErrors(validate(contactForm));
//     }

//     return (
//         <section className="contact-us-form container">
//             <div className="title">Come in Contact with Us</div>
//             {
//                 canSubmit ? (<div data-testid="success" className='alert alert-success text-center mt-2' role="alert"><h2>Thank you for your comment.</h2> <p>We will contact you as soon as possible.</p> </div>)
//                     : (<></>)
//             }
//             {
//                 failedSubmit ? (<div data-testid="failure" className='alert alert-danger text-center mt-2' role="alert"><h2>Something went wrong...</h2></div>)
//                     : (<></>)
//             }
//             <form action="" onSubmit={handleSubmit} noValidate>
//                 <div className="top">
//                     <div className="form-group">
//                         <input className="" type="text" name="contactUs" id="name" placeholder="Your Name"
//                             onKeyUp={handleKeyUp} onChange={handleChange} value={contactForm.name} />
//                         <div id="name-error" className="text-danger">{formErrors.name}</div>
//                     </div>
//                     <div className="form-group">
//                         <input className="" type="email" name="contactUs" id="email" placeholder="Your Mail"
//                             onKeyUp={handleKeyUp} onChange={handleChange} value={contactForm.email} />
//                         <div id="email-error" className="text-danger">{formErrors.email}</div>
//                     </div>
//                 </div>
//                 <div className="bottom">
//                     <div className="form-group">
//                         <input className="" type="text" name="contactUs" id="comments" placeholder="Comments"
//                             onKeyUp={handleKeyUp} onChange={handleChange} data-required-min="5" value={contactForm.comments} />
//                         <div data-testid="commentsError" id="comments-error" className="text-danger">{formErrors.comments}</div>
//                     </div>
//                 </div>
//                 <button type='submit' className='btn-themed btn-no-styles'>Post Comments</button>
//             </form>
//         </section>
//     )
// }

// export default ContactUsForm























// import React, { useState } from 'react'

// const ContactFormSection = () => {
//     const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
//     const [formErrors, setFormErrors] = useState({})
//     const [submitted, setSubmitted] = useState(false)

//     const validate = (values) => {
//         const errors = {}
//         const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//         if(!values.name)
//             errors.name = "You must enter a name"
        
//         if(!values.email)
//             errors.email = "You must enter an e-mail address"
//         else if(!regex_email.test(values.email))
//             errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"
        
//         if(!values.comment)
//             errors.comment = "You must enter a comment"
//         else if (values.comment.length < 5)
//             errors.comment = "Your comment must be longer then five characters"

//         if(Object.keys(errors).length === 0)
//             setSubmitted(true)
//         else 
//             setSubmitted(false)

//         return errors; 
//     }

//     const handleChange = (e) => {
//         const {id, value} = e.target
//         setContactForm({...contactForm, [id]: value})
//     } 

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setFormErrors(validate(contactForm)) 
//     }

//     return (
//         <section className="contact-form">
//             <div className="container">
//                  {
//                     submitted ? 
//                     (<div className="d-flex justify-content-center- align-items-center">
//                         <div>Thank you for your comment!</div>
//                     </div>)
//                     :
//                     (
//                         <>
//                             <h2>Come in Contact with Us</h2>
//                             {/* <pre>{ JSON.stringify(formErrors) }</pre> */}
//                             <form onSubmit={handleSubmit} noValidate>
//                                 <div>
//                                     <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
//                                     <div className="errorMessage">{formErrors.name}</div>
//                                 </div>
//                                 <div>
//                                     <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
//                                     <div className="errorMessage">{formErrors.email}</div>
//                                 </div>
//                                 <div className="textarea">
//                                     <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} ></textarea>
//                                     <div className="errorMessage">{formErrors.comment}</div>
//                                 </div>
//                                 <div className="formBtn">
//                                     <button type="submit" className="btn-theme">Post Comments</button>
//                                 </div>
//                             </form>
//                         </>
//                     )
//                 }
//             </div>
//         </section>
//     )
// }

// export default ContactFormSection