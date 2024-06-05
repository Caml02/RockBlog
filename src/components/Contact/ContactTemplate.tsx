import React from 'react';

interface EmailTemplateProps {
    name: string,
    subject: string,
    phone: string,
    email: string,  
}
  

const ContactTemplate = ({ name, subject, phone, email }: Readonly<EmailTemplateProps>) => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Contact Info</h5>
                </div>
                <div className="card-header">
                    Contact Info
                </div>
                <div className="card-body">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>                    
                    <p>Phone: {phone}</p>
                    <p>Subject: {subject}</p>
                </div>
            </div>
        </>
    )
}

export default ContactTemplate;
