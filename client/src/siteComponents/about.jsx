
const About = () => {
  return (
    /*
    <div>
      <div className="xl:hidden">
        <div className="mt-9 flex justify-center">
          <h1 className="ml-1 text-2xl text-[#4AD7D1]">About Me</h1>
        </div>
        <div className="ml-32 border rounded-br-sm w-36" />
        <div className="flex justify-center">
          <section className="mt-5 ml-9">
            <h2 className="text-2xl text-white">
              I am Back-end engineer.
              <br />
              With me also comes with
              <br /> a bonus Front-end framework <br />
              as well as a CSS Framework.
              <br />I mean, everyone started with
              <br />
              basic HTML & CSS.
              <br />
              <br />
              Which I feel is important to
              <br />
              note that everything boils down
              <br />
              to those two basics when
              <br />
              it comes to Web-Powered Applications.
            </h2>
          </section>
        </div>
        <div>
          <section className="mt-5 ml-9">
            <h1 className="text-2xl text-[#4AD7D1]">Education</h1>
          </section>
        </div>
              
        <div className="ml-4">
          <div className="flex flex-row">
          <div className="ml-7 mt-2 absolute left-4 - w-0.5 h-10 bg-red-600">
          </div>
          <h3 className="ml-8 text-lg text-white">BSc. Computer Technology,</h3>
          </div>
          <h3 className="ml-8 text-lg text-white">Multimedia University of Kenya.</h3>
        </div>
        <div>
          <section className="mt-5 ml-9">
            <h1 className="text-2xl text-[#4AD7D1]">Certifications & Licenses</h1>
          </section>
        </div>
        <div>
          {certifications1.map((cert)=>(
            <div>
              <div className="mt-3 ml-11">
                <div className="flex flex-row">
                  <div className="w-[50px] h-[50px] object-contain">
              <img src={cert.img} alt={cert.alt}/>
              </div>
              <h3 className="mt-6 ml-3 text-white underline decoration-red-600">{cert.name}</h3>
              </div>
              <div className="ml-16 text-white">
          <h6>Issued {cert.date} . {cert.expiration}</h6>
          <h6>Credential ID:</h6>
          <p>{cert.credentialId}</p>
          </div>
              </div>
            </div>
          ))}
           {(viewAll?<div>
          {certifications2.map((cert)=>(
            <div>
              <div className="mt-3 ml-11">
                <div className="flex flex-row">
                  <div className="w-[50px] h-[50px] object-contain">
              <img src={cert.img} alt={cert.alt}/>
              </div>
              <h3 className="mt-6 ml-3 text-white underline decoration-red-600">{cert.name}</h3>
              </div>
              <div className="ml-16 text-white">
          <h6>Issued {cert.date} . {cert.expiration}</h6>
          <h6>Credential ID:</h6>
          <p>{cert.credentialId}</p>
          
          </div>
              </div>
            </div>
          ))}
          </div>:null)}
        </div>
        <div className="mt-2 grid justify-center">
           {(!viewAll? <button onClick={handleViewAll} className='bg-[#4AD7D1] mt-3 p-3 mr-8 rounded-l-xl rounded-r-xl'>View All</button> : <button onClick={handleViewAll} className='bg-[#4AD7D1] mt-3 p-3 mr-8 rounded-l-xl rounded-r-xl'>View Less</button>)}
          </div>
      </div>
    </div>
    */
    <div className="ml-4 text-center p-10">
      <h2 className="text-4xl text-teal-600 font-medium py-2">Simon Wachira</h2>
      <h3 className="text-xl py-2">Software engineer.</h3>
      <p className="text-md py-2 leading-8 text-gray-800">
        I am software engineer highly skilled and experienced individual
        specialized in developing, and maintaining software solutions.
        <br /> I have deep understanding of various programming languages,
        frameworks, and development methodologies, they have the ability to
        translate complex requirements into efficient, reliable, and scalable
        software applications.
      </p>
    </div>
  );
};

export default About;
