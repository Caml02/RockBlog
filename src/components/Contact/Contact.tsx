import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import swal from "sweetalert2";
import React from "react";

interface EmailTemplateProps {
    name: string,
    subject: string,
    phone: string,
    email: string,
}

const Contact: React.FC<Readonly<EmailTemplateProps>> = ({ name, subject, phone, email }) => {

    const [formData, setFormData] = useState({
        name: name || '',
        phone: phone || '',
        email: email || '',
    });

    const [subjectData, setsubject] = useState({subject: subject || ''}); 

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // Update the status `subjectData`as an property object : `subject`
        setsubject({
            ...subjectData,
            subject: e.target.value,
        });
    };
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    subject: subjectData.subject,
                    phone: formData.phone,
                    email: formData.email,
                }),
            });
            const data = await res.json();

            if (data.error) {
                swal.fire({
                    title: 'Error',
                    text: 'Error sending the email',
                    icon: 'error',
                });
            } else {
                swal.fire({
                    title: 'Correo enviado',
                    text: 'Thank you for contacting us! We will get in touch with you as soon as possible.',
                    icon: 'success',
                });
            }
        } catch (error) {
            console.error('Error sending data:', error);
            swal.fire({
                title: 'Error',
                text: 'An error ocurrer sending data:',
                icon: 'error',
            });
        }
    };

    return (
        <>
            <div className="modal fade" id="ContactModal" tabIndex={-1} aria-labelledby="ContactModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contact Us!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className="modal-content">
                                <form  className="container form-label" onSubmit={handleSubmit}>
                                    <div className="mb-3 form-floating">
                                        <input type="text" 
                                            className="mt-2 form-control"
                                            id="name" 
                                            name="name"
                                            onChange={handleInputChange}
                                            value={formData.name} 
                                            required
                                            placeholder=""
                                            />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="mb-3 form-floating">
                                        <input type="email" 
                                            className="form-control" 
                                            id="email" 
                                            name="email"
                                            onChange={handleInputChange}
                                            placeholder=""
                                            value={formData.email}
                                        />
                                        <label htmlFor="email" className="form-label">Email</label>
                                    </div>
                                    <div className="mb-3 form-floating">
                                        <input type="tel" className="form-control" id="phone" 
                                            name="phone"
                                            onChange={handleInputChange} 
                                            value={formData.phone} 
                                            placeholder=""
                                        />
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                    </div>
                                    <div className="mb-3 form-floating">
                                        <textarea className="form-control" 
                                            id="message" 
                                            rows={2}
                                            name="subject"
                                            onChange={handleTextChange}
                                            value={subjectData.subject}
                                            placeholder=""
                                            required
                                        />
                                      <label htmlFor="message" className="form-label">Message</label>
                                    </div>
                                    <button type="submit" className="mb-3 button">Send <i className="bi bi-caret-right-fill"></i></button>
                                </form>
                            </div>
                        </div>                       
+                    </div>
                </div>
        </>
    );
}

export default Contact;