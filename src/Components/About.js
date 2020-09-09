import React from 'react';

const About = (props) => {
    const { data: { name, bio, street, city, state, zip, phone, email, resumedownload } } = props;
    const profilepic = `images/${props.data.image}`;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>Обо мне</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Контакты</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                    {city} {state} {zip}
                                </span><br />
                                <span>{phone}</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumedownload} className="button" target="_blank"><i className="fa fa-download"></i>Скачать резюме</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default About;