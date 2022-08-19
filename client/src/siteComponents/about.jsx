import React,{useState} from "react";

const certifications1=[
  {id:1,
  img:'https://media-exp1.licdn.com/dms/image/C560BAQH_xbnvm8hevg/company-logo_200_200/0/1608046236488?e=1668643200&v=beta&t=cCKuNXgrHSIwc-t6fdfXaywXE10gcXG6j1e6mNbDi9k',
   name:'edX Verified Exercising Leadership',
   date:'Jul 2022',
   expiration:'No Expiration',
   credentialId:'881cf3b417b04fab92c5fab1b629a3db',
   alt:"edx"
},
  {id:2,
  img:'https://tunga.io/wp-content/uploads/2020/12/TUNGAlogoround-1.png',
   name:'Software Testing Bootcamp',
   date:'May 2022',
   expiration:'No Expiration',
   credentialId:'7ae61ea0-866f-44f6-aa59-b27133440af3',
   alt:"tunga"
},
  {id:3,
  img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
   name:'Responsive Web Design course',
   date:'Apr 2022',
   expiration:'No Expiration',
   credentialId:'1162-21259584',
   alt:"sololearn1"
},
  {id:4,
  img:'https://media-exp1.licdn.com/dms/image/C4D0BAQERw4fwaA1TIA/company-logo_100_100/0/1600704317033?e=1668643200&v=beta&t=gZB43ixzwK91YwjbiREI_qlDOhBVrzmlXQXKcms6d5E',
   name:'Soft-Skills Training',
   date:'Dec 2021',
   expiration:'No Expiration',
   credentialId:'',
   alt:"jobberman"
},
  {id:5,
  img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
   name:'Python for Data Science',
   date:'Aug 2021',
   expiration:'No Expiration',
   credentialId:'21259584-1161',
   alt:"sololearn2"
}
]
const certifications2=[
  
  {id:6,
    img:'https://media-exp1.licdn.com/dms/image/C560BAQE9wp87-KDfwg/company-logo_100_100/0/1657054972290?e=1668643200&v=beta&t=HCTU-pjbd8APfPTjbD3MBETW2v6iCfsDNplAnUItIVU',
     name:'Working in a Digital World: Professional Skills',
     date:'Aug 2021',
     expiration:'No Expiration',
     credentialId:'c0c968b6-8d06-4c7c-a84d-9749e0af095a',
     alt:"IBM1"
  
  },
    {id:7,
    img:'https://media-exp1.licdn.com/dms/image/C4E0BAQH3BCCd-0PGng/company-logo_100_100/0/1591482161721?e=1668643200&v=beta&t=HP4VDrWMbQ0BGsrcY-JHcLp9RxCfmKk3VaOZt6SqmxE',
     name:'Google My Business',
     date:'Jul 2021',
     expiration:'No Expiration',
     credentialId:'83638885',
     alt:"google1"
  
  },
    {id:8,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
     name:'CSS Course',
     date:'Jun 2021',
     expiration:'No Expiration',
     credentialId:'1023-21259584',
     alt:"sololearn3" 
  },
    {id:9,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
     name:'PHP course',
     date:'Jun 2021',
     expiration:'No Expiration Date',
     credentialId:'1059-21259584',
     alt:"sololearn4"
  },
    {id:10,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQEfoRsyU4yUzg/company-logo_100_100/0/1631053379295?e=1668643200&v=beta&t=Usf80PfEgjGsglFJADUP_e5xoeQAcJCj87KyYGSlbYo',
     name:'The quickstart guide to YouTube',
     date:'Jun 2021',
     expiration:'No Expiration',
     credentialId:'',
     alt:"youTube"
  },
    {id:11,
    img:'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1668643200&v=beta&t=yVG1TUfPEdKA2aBDbKd_C-l2KX1KZQafsTtQ-4ZF_PM',
     name:'Digital Marketing Foundations',
     date:'May 2021',
     expiration:'No Expiration',
     credentialId:'',
     alt:"google2"
  },
    {id:12,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1668643200&v=beta&t=lMpp1kBw-F858dNefFnnevGq625ssU2R1XgRzAP-Cxs',
     name:'Google Ads for Beginners',
     date:'May 2021',
     expiration:'No Expiration',
     credentialId:'WFVAUYK3NB8L',
     alt:"google3"
  },
    {id:13,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
     name:'JavaScript',
     date:'May 2021',
     expiration:'No Expiration',
     credentialId:'21259584-1024',
     alt:"sololearn"
  },
    {id:14,
    img:'https://media-exp1.licdn.com/dms/image/C4E0BAQHQMKaX8dJR5A/company-logo_100_100/0/1569303325869?e=1668643200&v=beta&t=jX76tsp0htblSqhKCfFARtA3ORlsQs-hy_vW0fSHW68',
     name:'Certified Presentation Designer',
     date:'Apr 2021',
     expiration:'No Expiration',
     credentialId:'',
     alt:"visme"
  },
    {id:15,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
     name:'HTML Course',
     date:'Apr 2021',
     expiration:'No Expiration',
     credentialId:'1014-21259584',
     alt:"sololearn5"
  },
    {id:16,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
     name:'SQL',
     date:'Apr 2021',
     expiration:'No Expiration',
     credentialId:'21259584-1060',
     alt:'sololearn6'
  },
    {id:17,
    img:'https://media-exp1.licdn.com/dms/image/C560BAQE9wp87-KDfwg/company-logo_100_100/0/1657054972290?e=1668643200&v=beta&t=HCTU-pjbd8APfPTjbD3MBETW2v6iCfsDNplAnUItIVU',
     name:'Enterprise Design Thinking Practitioner',
     date:'Mar 2021',
     expiration:'No Expiration',
     credentialId:'',
     alt:'IBM3'
  },
    {id:18,
    img:'https://media-exp1.licdn.com/dms/image/C4E0BAQH3BCCd-0PGng/company-logo_100_100/0/1591482161721?e=1668643200&v=beta&t=HP4VDrWMbQ0BGsrcY-JHcLp9RxCfmKk3VaOZt6SqmxE',
     name:'Fundamentals of Digital Marketing',
     date:'Feb 2021',
     expiration:'No Expiration',
     credentialId:'4HU H6J C5X',
     alt:'google4' ,
  },
    {id:19,
    img:'https://media-exp1.licdn.com/dms/image/C4D0BAQHER-dvTqh2tA/company-logo_100_100/0/1625174152948?e=1668643200&v=beta&t=CBEXc46fVD_Ud2cYKwcw66FOVi0e848_F7xHLDQxP6s',
     name:'Python for Beginners',
     date:'Jan 2021',
     expiration:'No Expiration',
     credentialId:'21259584-1157',
     alt:'sololearn7'
  },
    {id:20,
    img:'https://media-exp1.licdn.com/dms/image/C4E0BAQFgocdTGHthDA/company-logo_100_100/0/1581351014172?e=1668643200&v=beta&t=xesPu88EqE3Yh_f4-MfoJ9fn0ePlZyytprFu_xR0uYI',
     name:'Cisco Certified Network Associate Security (CCNA)',
     date:'Jun 2020',
     expiration:'No Expiration',
     credentialId:'',
     alt: 'cisco'
  },
    {id:21,
    img:'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1668643200&v=beta&t=yVG1TUfPEdKA2aBDbKd_C-l2KX1KZQafsTtQ-4ZF_PM',
     name:'Google Analytics For Beginners',
     date:'Aug 2020',
     expiration:'Expires Aug 2023',
     credentialId:'xKlF1nixTHqeY_2ocZ-KJ',
     alt:'google5'
  },
    {id:22,
    img:'https://media-exp1.licdn.com/dms/image/C4E0BAQG5YjfMM9KL-w/company-logo_100_100/0/1632775286258?e=1668643200&v=beta&t=2zSMFcU1DBPejp3aqMeyE49Zrwt9mzSrRMShEsVqVDw',
     name:'NSE 1 Network Security Associate',
     date:'Aug 2020',
     expiration:'No Expiration',
     credentialId:'nixTocB',
     alt:'NSE'
  },
]

const About = () => {
  const [viewAll,setViewAll]=useState(false);
  const handleViewAll=()=>{
    setViewAll(!viewAll)
  }
  return (
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
        {/*<div className="ml-10 mt-5 border rounded-br-sm w-6 rotate-90" /> */}      
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
  );
};

export default About;
